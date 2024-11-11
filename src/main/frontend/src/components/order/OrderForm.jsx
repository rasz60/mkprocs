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
} from "@mui/material";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const [validated, setValidated] = useState(false);
  const [factories, setFactories] = useState([]);
  const [order, setOrder] = useState({
    pdName: "",
    pdFcNum: "",
    pdCategory: "",
    pdColorNum: "",
    pdPrice: "",
  });
  //const [platforms, setPlatforms] = useState(null);
  //const [colors, setProductColors] = useState(null);

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

    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = event.target.checkValidity();
    console.log(isValid);
    if (!isValid) {
      setValidated(false);
      event.stopPropagation();
    } else {
      setValidated(true);
      fnSave();
    }
  };

  return (
    <form noValidate validated={validated} onSubmit={handleSubmit}>
      <Box className="box-form">
        <FormControl fullWidth>
          <TextField
            name="pdName"
            label="Product Name"
            variant="standard"
            helperText="등록할 상품 이름을 입력해주세요."
            className="mt-4"
            value={order.pdName}
            onChange={handleChng}
            required
          />
        </FormControl>

        <FormControl fullWidth required className="mt-4 fc-select">
          <InputLabel htmlFor="pdFcNum">Factory</InputLabel>
          <Select
            name="pdFcNum"
            variant="standard"
            className="mt-4"
            defaultValue=""
            value={order.pdFcNum}
            onChange={handleChng}
          >
            <MenuItem value="">선택</MenuItem>
            {factories.map((factory) => (
              <MenuItem value={factory.fcNum}>{factory.fcName}</MenuItem>
            ))}
          </Select>
          <FormHelperText>제조사를 선택해주세요.</FormHelperText>
        </FormControl>

        <FormControl fullWidth required className="mt-4 fc-select">
          <InputLabel htmlFor="pdCategory">Category</InputLabel>
          <Select
            name="pdCategory"
            variant="standard"
            className="mt-4"
            defaultValue=""
            value={order.pdCategory}
            onChange={handleChng}
          >
            <MenuItem value="">선택</MenuItem>
          </Select>
          <FormHelperText>상품 카테고리를 선택해주세요.</FormHelperText>
        </FormControl>

        <FormControl fullWidth required className="mt-4 fc-select">
          <InputLabel htmlFor="pdColorNum">Colors</InputLabel>
          <Select
            name="pdColorNum"
            variant="standard"
            className="mt-4"
            defaultValue=""
            value={order.pdColorNum}
            onChange={handleChng}
          >
            <MenuItem value="">선택</MenuItem>
          </Select>
          <FormHelperText>상품 색상을 선택해주세요.</FormHelperText>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            name="pdPrice"
            label="Price"
            variant="standard"
            helperText="상품 가격을 입력해주세요."
            className="mt-4"
            value={order.pdPrice}
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

export default OrderForm;
