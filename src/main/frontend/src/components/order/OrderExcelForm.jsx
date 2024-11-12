//import { useEffect, useState } from "react";
import axios from "axios";

import { Box, TextField } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (files) => {
    console.log(files);

    let url = "/rest/od/create";
    let formData = new FormData();

    formData.append("orderData", files[0]);

    let res1 = await axios
      .post(url, formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(res1);

    let res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    let data = await res.json();

    if (data.resultCode === 200) {
      alert(data.resultMessage);
      navigate("/admin/order/form");
    }
  };

  return (
    <form noValidate>
      <Box>
        <TextField
          type="file"
          id="orderData"
          fullWidth
          onChange={(e) => handleSubmit(e.target.files)}
          required
          accept=".xlsx, .xls, .csv"
          helperText="주문할 상품 리스트를 업로드해주세요. (.xlsx, .xls, .csv)"
        ></TextField>
      </Box>
    </form>
  );
};

export default OrderForm;
