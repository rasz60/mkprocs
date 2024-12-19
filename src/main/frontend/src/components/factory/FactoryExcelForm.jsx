import axios from "axios";

import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FactoryExcelForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (files) => {
    let url = "/rest/fc/createBulk";
    let formData = new FormData();

    formData.append("factoryData", files[0]);

    await axios
      .post(url, formData)
      .then((res) => {
        if (res.data.resultCode === 200) {
          alert(res.data.resultMessage);
          navigate("/admin/factory/list");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("제조사 일괄 등록에 실패하였습니다.");
      });
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
