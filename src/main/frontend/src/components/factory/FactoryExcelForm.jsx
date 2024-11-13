//import { useEffect, useState } from "react";
import axios from "axios";

import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FactoryExcelForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (files) => {
    console.log(files);

    let url = "/rest/fc/createBulk";
    let formData = new FormData();

    formData.append("factoryData", files[0]);

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
      navigate("/admin/factory/form");
    }
  };

  return (
    <form noValidate>
      <Box>
        <TextField
          type="file"
          id="factoryData"
          fullWidth
          onChange={(e) => handleSubmit(e.target.files)}
          required
          accept=".xlsx, .xls, .csv"
          helperText="등록할 제조사 리스트를 업로드해주세요. (.xlsx, .xls, .csv)"
        ></TextField>
      </Box>
    </form>
  );
};

export default FactoryExcelForm;
