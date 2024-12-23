import { useState } from "react";
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

const CategoryForm = () => {
  const [validated, setValidated] = useState(false);
  const [ctDtl, setCtDtl] = useState({
    pdCategoryLv1Name: "",
    pdCategoryLv2Name: "",
    pdCategoryName: "",
    pdParentCategoryInfo: "",
    pdCategoryLevel: "",
  });
  const [ctLv1Dtl, setCtLv1Dtl] = useState([]);
  const [ctLv2Dtl, setCtLv2Dtl] = useState([]);

  const categoryList = async (lv) => {
    let url = "/rest/pd/ct/list/" + lv + "/" + null;
    await axios
      .get(url)
      .then((res) => {
        if (lv === 1) {
          document.querySelector("#pdCategoryLv1Name").readOnly = "false";
          setCtLv1Dtl(res.data);
        } else if (lv === 2) {
          setCtLv2Dtl(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

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
          navigate("/admin/product/list");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("카테고리 등록에 실패했습니다. 시스템 관리자에게 문의해주세요.");
      });
  };

  const handleChng = (event, lv) => {
    const { name, value } = event.target;

    if (lv === 0 || !lv) {
      setCtDtl({
        ...ctDtl,
        [name]: value,
      });

      if (name === "pdCategoryLevel" && value > 1) {
        categoryList(1);
      }
    } else {
      if (lv === ctDtl.pdCategoryLevel - 1) {
        ctDtl.pdCategoryLevel = value;
      } else {
        categoryList(ctDtl.pdCategoryLevel - 1);
      }
    }
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
    /*
    let ctLv1 = ctDtl.pdCategoryLv1Name;

    if (key === "pdCategoryName" && key === "pdCategoryLevel") {
      if (val === "") {
        alert("카테고리 이름과 분류는 필수 입력 값입니다.");
        setValidated(val !== "");
        return;
      }
    }
    */
  };

  return (
    <form noValidate validated={validated} onSubmit={handleSubmit}>
      <Box className="box-form">
        <Grid2 container>
          <Grid2 size={6}>
            <FormControl fullWidth required className="mt-3 p-2 fc-select">
              <InputLabel htmlFor="pdCategoryLv1Name">Category Lv.1</InputLabel>
              <Select
                id="pdCategoryLv1Name"
                name="pdCategoryLv1Name"
                variant="standard"
                className="mt-3"
                value={ctLv1Dtl.pdCategoryName}
                onChange={(event) => handleChng(event, 1)}
                readOnly="true"
              >
                <MenuItem value="">선택</MenuItem>
                {ctLv1Dtl
                  ? ctLv1Dtl.map((ctLv1) => (
                      <MenuItem value={ctLv1.pdCategoryNum}>
                        {ctLv1.pdCategoryName}
                      </MenuItem>
                    ))
                  : null}
              </Select>
              <FormHelperText>대분류 구분을 선택해주세요.</FormHelperText>
            </FormControl>
          </Grid2>
          <Grid2 size={6}>
            <FormControl fullWidth required className="mt-3 p-2 fc-select">
              <InputLabel htmlFor="pdCategoryLv2Name">Category Lv.2</InputLabel>
              <Select
                id="pdCategoryLv2Name"
                name="pdCategoryLv2Name"
                variant="standard"
                className="mt-3"
                value={ctLv2Dtl.pdCategoryName}
                onChange={(event) => handleChng(event, 2)}
                readOnly="true"
              >
                <MenuItem value="">선택</MenuItem>
                {ctLv2Dtl
                  ? ctLv2Dtl.map((ctLv2) => (
                      <MenuItem value={ctLv2.pdCategoryNum}>
                        {ctLv2.pdCategoryName}
                      </MenuItem>
                    ))
                  : null}
              </Select>
              <FormHelperText>중분류 구분을 선택해주세요.</FormHelperText>
            </FormControl>
          </Grid2>
        </Grid2>

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

export default CategoryForm;
