import { useEffect, useState, useContext } from "react";
import { Ctx } from "../../App.js";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Divider,
  Button,
  Grid2,
  Chip,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductForm = () => {
  // global variants
  const { loader } = useContext(Ctx);

  // validation
  const [validated, setValidated] = useState("false");

  // factories (제조사)
  const [factories, setFactories] = useState([]);
  // categoryLevel1, categoryLevel2, categoryLevel3 (대/중/소분류 select-box)
  const [ctLv1Dtl, setCtLv1Dtl] = useState([]);
  const [ctLv2Dtl, setCtLv2Dtl] = useState([]);
  const [ctLv3Dtl, setCtLv3Dtl] = useState([]);

  //const [platforms, setPlatforms] = useState(null);

  // 상품 색상
  const [colors, setColors] = useState(null);

  // 상품 정보 상세
  const [pdDtl, setPdDtl] = useState({
    pdName: "",
    pdFcNum: "",
    pdCategoryLv1: "",
    pdCategoryLv2: "",
    pdCategoryLv3: "",
    pdColorNum: "",
    pdPrice: "",
  });

  /*
    func : document ready
  */
  useEffect(() => {
    categoryList(1); // category 대분류 전체 조회
    factoryList(); // factory(제조사) 전체 조회
    getColorList(); // 상품 색상 전체 조회
  }, []);

  /*
    func : 대/중/소분류 카테고리 리스트 조회
  */
  const categoryList = async (lv, pid) => {
    let url = "/rest/pd/ct/list/" + lv + (pid ? "/" + pid : "");
    await axios
      .get(url)
      .then((res) => {
        if (lv === 1) {
          // 대분류
          setCtLv1Dtl(res.data.result.pdCtList);
        } else if (lv === 2) {
          // 중분류
          setCtLv2Dtl(res.data.result.pdCtList);
        } else if (lv === 3) {
          // 소분류
          setCtLv3Dtl(res.data.result.pdCtList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*
    func : 제조사 리스트 조회
  */
  const factoryList = async () => {
    loader(0);
    let url = "/rest/fc/list";

    await axios.get(url).then((rst) => {
      let msg = rst.data.resultMessage;
      let code = rst.data.resultCode;
      let list = rst.data.result.fcList;
      if (code === 200) {
        setFactories(list);
      } else {
        alert(msg);
      }
    });
    loader(-1);
  };

  /*
    func : 상품 색상 목록 조회
  */
  const getColorList = async () => {
    // 로딩 컴포넌트 출력
    loader(0);

    let url = "/rest/pd/cr/list";

    let arr = [];

    await axios
      .get(url)
      .then((res) => {
        setColors(res.data.result.pdCrList);
      })
      .catch((err) => {
        console.log(err);
      });

    // 로딩 컴포넌트 삭제
    loader(-1);
    return arr;
  };

  const navigate = useNavigate();

  const fnSave = async () => {
    let url = "/rest/pd/create";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pdName: document.querySelector("#pdName").value,
        pdCategory: document.querySelector("#pdCategory").value,
        pdPrice: document.querySelector("#pdPrice").value,
        pdFcNum: document.querySelector("#pdFcNum").value,
        pdColorNum: document.querySelector("#pdColorNum").vaule,
      }),
    });

    let data = await res.json();

    if (data.resultCode === 200) {
      alert(data.resultMessage);
      navigate("/admin/product/list");
    }
  };

  const handleChng = (event) => {
    const { name, value } = event.target;

    setPdDtl({
      ...pdDtl,
      [name]: value,
    });

    if (name.indexOf("pdCategory") >= 0) {
      categoryCleanUp(name, value);
    }
  };

  const categoryCleanUp = (name, value) => {
    let lv = Number(name.replace("pdCategoryLv", ""));

    // 상태 업데이트를 한 번에 처리
    setPdDtl((prevPdDtl) => {
      let updatedPdDtl = { ...prevPdDtl };

      // 중분류나 소분류를 초기화
      if (lv < 3) {
        for (let i = lv + 1; i <= 3; i++) {
          if (i === lv + 1 && value) {
            categoryList(lv + 1, value);
          }

          if (i === 2) {
            updatedPdDtl.pdCategoryLv2 = "";
            setCtLv2Dtl([]);
          } else {
            updatedPdDtl.pdCategoryLv3 = "";
            setCtLv3Dtl([]);
          }
        }
      }

      return updatedPdDtl;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validation();

    if (!validated) {
      setValidated(false);
      event.stopPropagation();
    } else {
      setValidated(true);
      fnSave();
    }
  };

  const validation = () => {
    for (let key in pdDtl) {
      let val = pdDtl[key];
      console.log(key, val);

      if (key === "pdName") {
        // valid
      }

      //else if ( )
    }
  };

  return (
    <form noValidate validated={validated} onSubmit={handleSubmit}>
      <Box className="box-form">
        <Grid2 container>
          <Grid2 size={11.3}>
            <Grid2 container sx={{ justifyContent: "space-between" }}>
              <Grid2 size={3.9}>
                <FormControl fullWidth required className="mt-4 fc-select">
                  <InputLabel htmlFor="pdCategoryLv1">대분류</InputLabel>
                  <Select
                    name="pdCategoryLv1"
                    variant="standard"
                    className="mt-4"
                    defaultValue=""
                    value={pdDtl.pdCategoryLv1 || ""}
                    onChange={handleChng}
                  >
                    <MenuItem value="">선택</MenuItem>
                    {ctLv1Dtl
                      ? ctLv1Dtl.map((ctLv1) => (
                          <MenuItem
                            key={ctLv1.pdCategoryNum}
                            value={ctLv1.pdCategoryNum}
                          >
                            {ctLv1.pdCategoryName}
                          </MenuItem>
                        ))
                      : null}
                  </Select>
                  <FormHelperText>상품 대분류를 선택해주세요.</FormHelperText>
                </FormControl>
              </Grid2>
              <Grid2 size={3.9}>
                <FormControl fullWidth required className="mt-4 fc-select">
                  <InputLabel htmlFor="pdCategoryLv2">중분류</InputLabel>
                  <Select
                    name="pdCategoryLv2"
                    variant="standard"
                    className="mt-4"
                    defaultValue=""
                    value={pdDtl.pdCategoryLv2 || ""}
                    onChange={handleChng}
                  >
                    <MenuItem value="">선택</MenuItem>
                    {ctLv2Dtl
                      ? ctLv2Dtl.map((ctLv2) => (
                          <MenuItem
                            key={ctLv2.pdCategoryNum}
                            value={ctLv2.pdCategoryNum}
                          >
                            {ctLv2.pdCategoryName}
                          </MenuItem>
                        ))
                      : null}
                  </Select>
                  <FormHelperText>상품 중분류를 선택해주세요.</FormHelperText>
                </FormControl>
              </Grid2>
              <Grid2 size={3.9}>
                <FormControl fullWidth required className="mt-4 fc-select">
                  <InputLabel htmlFor="pdCategoryLv3">소분류</InputLabel>
                  <Select
                    name="pdCategoryLv3"
                    variant="standard"
                    className="mt-4"
                    defaultValue=""
                    value={pdDtl.pdCategoryLv3 || ""}
                    onChange={handleChng}
                  >
                    <MenuItem value="">선택</MenuItem>
                    {ctLv3Dtl
                      ? ctLv3Dtl.map((ctLv3) => (
                          <MenuItem
                            key={ctLv3.pdCategoryNum}
                            value={ctLv3.pdCategoryNum}
                          >
                            {ctLv3.pdCategoryName}
                          </MenuItem>
                        ))
                      : null}
                  </Select>
                  <FormHelperText>상품 소분류를 선택해주세요.</FormHelperText>
                </FormControl>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 className="row-side-btn-box" size={0.7}>
            <Button
              variant="outlined"
              startIcon={<Add />}
              size="small"
              onClick={() => navigate("/admin/product/category/list")}
            >
              추가
            </Button>
          </Grid2>
        </Grid2>

        <FormControl fullWidth>
          <TextField
            name="pdName"
            label="Product Name"
            variant="standard"
            helperText="등록할 상품 이름을 입력해주세요."
            className="mt-4"
            value={pdDtl.pdName}
            onChange={handleChng}
            required
          />
        </FormControl>
        <Grid2 container>
          <Grid2 size={11.3}>
            <FormControl fullWidth required className="mt-4 fc-select">
              <InputLabel htmlFor="pdFcNum">Factory</InputLabel>
              <Select
                name="pdFcNum"
                variant="standard"
                className="mt-4"
                defaultValue=""
                value={pdDtl.pdFcNum || ""}
                onChange={handleChng}
              >
                <MenuItem value="">선택</MenuItem>
                {factories
                  ? factories.map((factory) => (
                      <MenuItem key={factory.fcNum} value={factory.fcNum}>
                        {factory.fcName}
                      </MenuItem>
                    ))
                  : null}
              </Select>
              <FormHelperText>제조사를 선택해주세요.</FormHelperText>
            </FormControl>
          </Grid2>
          <Grid2 className="row-side-btn-box" size={0.7}>
            <Button
              variant="outlined"
              startIcon={<Add />}
              size="small"
              onClick={() => navigate("/admin/factory/form")}
            >
              추가
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container>
          <Grid2 size={11.3}>
            <FormControl fullWidth required className="mt-4 fc-select">
              <InputLabel htmlFor="pdColorNum">Colors</InputLabel>
              <Select
                name="pdColorNum"
                variant="standard"
                className="mt-4"
                defaultValue=""
                value={pdDtl.pdColorNum}
                onChange={handleChng}
              >
                <MenuItem value="">선택</MenuItem>
                {colors
                  ? colors.map((color) => (
                      <MenuItem key={color.pdColorNum} value={color.pdColorNum}>
                        <Grid2 container sx={{ width: "100%" }} spacing={2}>
                          <Grid2 size={0.23}>
                            <Chip
                              sx={{
                                border: "1px solid #ececec",
                                backgroundColor: color.pdColorCode,
                                width: "2em",
                                height: "1.2em",
                              }}
                            ></Chip>
                          </Grid2>
                          <Grid2 size={11.77}>
                            <span className="pd-color-name">
                              {color.pdColorName}
                            </span>
                          </Grid2>
                        </Grid2>
                      </MenuItem>
                    ))
                  : null}
              </Select>
              <FormHelperText>상품 색상을 선택해주세요.</FormHelperText>
            </FormControl>
          </Grid2>
          <Grid2 className="row-side-btn-box" size={0.7}>
            <Button
              variant="outlined"
              startIcon={<Add />}
              size="small"
              onClick={() => navigate("/admin/product/color/list")}
            >
              추가
            </Button>
          </Grid2>
        </Grid2>

        <FormControl fullWidth>
          <TextField
            name="pdPrice"
            label="Price"
            variant="standard"
            helperText="상품 가격을 입력해주세요."
            className="mt-4"
            value={pdDtl.pdPrice}
            onChange={handleChng}
            required
          />
        </FormControl>
      </Box>

      <Divider />
      <Box className="box-button-bottom">
        <Button type="submit" variant="contained">
          Regist
        </Button>
      </Box>
    </form>
  );
};

export default ProductForm;
