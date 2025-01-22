import { useEffect, useState } from "react";
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
} from "@mui/material";
import { Add } from "@mui/icons-material";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductForm = () => {
  const [validated, setValidated] = useState("false");
  const [factories, setFactories] = useState([]);
  // categoryLevel1, categoryLevel2 (select-box)
  const [ctLv1Dtl, setCtLv1Dtl] = useState([]);
  const [ctLv2Dtl, setCtLv2Dtl] = useState([]);
  const [ctLv3Dtl, setCtLv3Dtl] = useState([]);
  //const [platforms, setPlatforms] = useState(null);
  //const [colors, setProductColors] = useState(null);
  const [pdDtl, setPdDtl] = useState({
    pdName: "",
    pdFcNum: "",
    pdCategoryLv1: "",
    pdCategoryLv2: "",
    pdCategoryLv3: "",
    pdColorNum: "",
    pdPrice: "",
  });

  useEffect(() => {
    categoryList(1);
    factoryList();
  }, []);

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

  const factoryList = async () => {
    let url = "/rest/fc/list";
    let res = await fetch(url);
    let resJson = await res.json();

    let fcList = resJson.result.fcList;

    if (fcList != null) {
      setFactories(fcList);
    }
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
                    {ctLv1Dtl.length > 0
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
                    {ctLv2Dtl.length > 0
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
                    {ctLv3Dtl.length > 0
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
                {factories.length > 0
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
              </Select>
              <FormHelperText>상품 색상을 선택해주세요.</FormHelperText>
            </FormControl>
          </Grid2>
          <Grid2 className="row-side-btn-box" size={0.7}>
            <Button
              variant="outlined"
              startIcon={<Add />}
              size="small"
              onClick={() => navigate("/admin/product/color/form")}
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
