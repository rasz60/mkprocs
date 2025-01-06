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

const ProductForm = () => {
  const [validated, setValidated] = useState(false);
  const [factories, setFactories] = useState([]);
  //const [platforms, setPlatforms] = useState(null);
  //const [colors, setProductColors] = useState(null);
  const [pdDtl, setPdDtl] = useState({
    pdName: "",
    pdFcNum: "",
    pdCategory: "",
    pdColorNum: "",
    pdPrice: "",
  });

  useEffect(() => {
    factoryList();
  }, []);

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
                  <InputLabel htmlFor="pdCategory">대분류</InputLabel>
                  <Select
                    name="pdCategory"
                    variant="standard"
                    className="mt-4"
                    defaultValue=""
                    value={pdDtl.pdCategory}
                    onChange={handleChng}
                  >
                    <MenuItem value="">선택</MenuItem>
                  </Select>
                  <FormHelperText>상품 대분류를 선택해주세요.</FormHelperText>
                </FormControl>
              </Grid2>
              <Grid2 size={3.9}>
                <FormControl fullWidth required className="mt-4 fc-select">
                  <InputLabel htmlFor="pdCategory">중분류</InputLabel>
                  <Select
                    name="pdCategory"
                    variant="standard"
                    className="mt-4"
                    defaultValue=""
                    value={pdDtl.pdCategory}
                    onChange={handleChng}
                  >
                    <MenuItem value="">선택</MenuItem>
                  </Select>
                  <FormHelperText>상품 중분류를 선택해주세요.</FormHelperText>
                </FormControl>
              </Grid2>
              <Grid2 size={3.9}>
                <FormControl fullWidth required className="mt-4 fc-select">
                  <InputLabel htmlFor="pdCategory">소분류</InputLabel>
                  <Select
                    name="pdCategory"
                    variant="standard"
                    className="mt-4"
                    defaultValue=""
                    value={pdDtl.pdCategory}
                    onChange={handleChng}
                  >
                    <MenuItem value="">선택</MenuItem>
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
              onClick={() => navigate("/admin/product/category/form")}
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
                value={pdDtl.pdFcNum}
                onChange={handleChng}
              >
                <MenuItem value="">선택</MenuItem>
                {factories.map((factory) => (
                  <MenuItem value={factory.fcNum}>{factory.fcName}</MenuItem>
                ))}
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
