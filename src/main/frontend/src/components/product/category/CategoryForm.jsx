import { useState, useEffect, useCallback } from "react";
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
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSleigh } from "react-icons/fa";

const CategoryForm = () => {
  // validation, navigate
  const [validated, setValidated] = useState(0);
  const navigate = useNavigate();

  // form input, select-box
  const [ctDtl, setCtDtl] = useState({
    pdCategoryLv1Num: 0,
    pdCategoryLv2Num: 0,
    pdCategoryName: "",
    pdParentCategoryNum: 0,
    pdCategoryLevel: 0,
  });

  // categoryLevel1, categoryLevel2 (select-box)
  const [ctLv1Dtl, setCtLv1Dtl] = useState([]);
  const [ctLv2Dtl, setCtLv2Dtl] = useState([]);

  // 최초 로딩 시 parent category row 숨김
  useEffect(() => {
    document.querySelector("#pCt").style.display = "none";
  }, []);

  /*
    func : select-box, input 변경 시 binding
  */
  const handleChng = (event, lv) => {
    let name = event.target.name;
    let value = event.target.value;

    // 신규 카테고리 단계, 신규 카테고리 이름 입력 시
    if (lv === 0 || !lv) {
      // 신규 카테고리 변경한 경우
      if (name === "pdCategoryLevel") {
        ctDtl.pdParentCategoryNum = 0; // 부모 카테고리 값 초기화
        if (value > 1) {
          ctDtl.pdCategoryLv1Num = 0;
          ctDtl.pdCategoryLv2Num = 0;
          ctDtl.pdParentCategoryNum = 0;
          setCtLv2Dtl([]); // 중분류 초기화
          categoryList(1); // 대분류 초기화
        }
        // 중/소분류 선택 시, 상위 분류 선택 row 활성화
        document.querySelector("#pCt").style.display =
          value > 1 ? "flex" : "none";

        // 소분류 선택 시, 중분류 선택 col 활성화
        document.querySelector("#pCt #lv2").style.display =
          value === 3 ? "flex" : "none";
      }
    } else {
      // 대/중분류 select box 변경 시
      name = "pdCategoryLv" + lv + "Num";

      // 선택한 신규 카테고리의 부모 level인 경우
      if (lv === ctDtl.pdCategoryLevel - 1) {
        ctDtl.pdParentCategoryNum = value; // parent category 값으로 설정
      } else {
        // 아닌 경우, 다음 분류 가져오기
        categoryList(lv + 1, value);
      }
    }

    // 입력 값 binding
    setCtDtl({ ...ctDtl, [name]: value });
  };

  /* 
    func : 카테고리 리스트 조회 (lv = 분류단계, pid = 부모카테고리Num)
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
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*
    func : regist 버튼 클릭 시
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    validation(e); // 입력 값 validation
  };

  /*
    func : 입력 값 validation
  */
  const validation = () => {
    let ctLv = ctDtl.pdCategoryLevel; // 카테고리 분류 단계
    let ctName = ctDtl.pdCategoryName; // 카테고리 이름
    let valid = 0;
    let msg = "";
    if (ctLv && ctName) {
      if (ctLv === 1) {
        valid = 1;
      } else {
        let ctP = ctDtl.pdParentCategoryNum;

        if (ctP) {
          valid = 1;
        } else {
          valid = 0;
          msg = "상위 분류 값을 선택해주세요.";
        }
      }
    } else {
      valid = 0;
      msg = "필수 입력 값을 입력해주세요. (분류, 이름)";
    }
    setValidated(valid);
    if (valid === 1) fnSave();
    else alert(msg);
  };

  /*
    func : 저장
  */
  const fnSave = async () => {
    let url = "/rest/pd/ct/create";

    await axios
      .post(url, JSON.stringify(ctDtl), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.resultCode === 200) {
          alert(res.data.resultMessage);
          navigate("/admin/product/category/list");
        } else {
          alert(res.data.resultMessage);
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
        alert();
      });
  };

  return (
    <form noValidate validated={validated} onSubmit={handleSubmit}>
      <Box className="box-form">
        <Grid2 container>
          <Grid2 size={1.5}>
            <FormControl fullWidth required className="mt-3 p-2 fc-select">
              <InputLabel htmlFor="pdCategoryLevel">Category Level</InputLabel>
              <Select
                id="pdCategoryLevel"
                name="pdCategoryLevel"
                variant="standard"
                className="mt-3"
                value={ctDtl.pdCategoryLevel}
                onChange={(event) => handleChng(event, 0)}
              >
                <MenuItem value={0}>선택</MenuItem>
                <MenuItem value={1}>대분류</MenuItem>
                <MenuItem value={2}>중분류</MenuItem>
                <MenuItem value={3}>소분류</MenuItem>
              </Select>
              <FormHelperText>분류 단계를 선택해주세요.</FormHelperText>
            </FormControl>
          </Grid2>
          <Grid2 size={10.5}>
            <FormControl fullWidth>
              <TextField
                name="pdCategoryName"
                label="Category Name"
                variant="standard"
                helperText="등록할 카테고리 이름을 입력해주세요."
                className="mt-4"
                value={ctDtl.pdCategoryName}
                onChange={handleChng}
                required
              />
            </FormControl>
          </Grid2>
        </Grid2>
        <Divider />
        <Grid2 container id="pCt">
          <Grid2 size={6}>
            <FormControl fullWidth required className="mt-3 p-2 fc-select">
              <InputLabel htmlFor="pdCategoryLv1Name">Category Lv.1</InputLabel>
              <Select
                id="pdCategoryLv1Name"
                name="pdCategoryLv1Name"
                variant="standard"
                className="mt-3"
                value={ctDtl.pdCategoryLv1Num}
                onChange={(event) => handleChng(event, 1)}
                readOnly={ctLv1Dtl.length > 0 ? false : true}
              >
                <MenuItem value={0}>선택</MenuItem>
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
              <FormHelperText>상위 대분류를 선택해주세요.</FormHelperText>
            </FormControl>
          </Grid2>
          <Grid2 size={6} id="lv2">
            <FormControl fullWidth required className="mt-3 p-2 fc-select">
              <InputLabel htmlFor="pdCategoryLv2Name">Category Lv.2</InputLabel>
              <Select
                id="pdCategoryLv2Name"
                name="pdCategoryLv2Name"
                variant="standard"
                className="mt-3"
                value={ctDtl.pdCategoryLv2Num}
                onChange={(event) => handleChng(event, 2)}
                readOnly={ctLv2Dtl.length > 0 ? false : true}
              >
                <MenuItem value={0}>선택</MenuItem>
                {ctLv2Dtl.length > 0
                  ? ctLv2Dtl.map((ctLv2) => (
                      <MenuItem value={ctLv2.pdCategoryNum}>
                        {ctLv2.pdCategoryName}
                      </MenuItem>
                    ))
                  : null}
              </Select>
              <FormHelperText>상위 중분류를 선택해주세요.</FormHelperText>
            </FormControl>
          </Grid2>
        </Grid2>
      </Box>

      <Divider />
      <Box className="box-button-bottom">
        <Button type="button" variant="contained" onClick={handleSubmit}>
          Regist
        </Button>
      </Box>
    </form>
  );
};

export default CategoryForm;
