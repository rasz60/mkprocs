import axios from "axios";

import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderExcelForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (files) => {
    let url = "/rest/od/createBulk";
    let formData = new FormData();

    formData.append("orderData", files[0]);

    await axios
      .post(url, formData)
      .then((res) => {
        if (res.data.resultCode === 200) {
          alert(res.data.resultMessage);
          navigate("/admin/orders/list");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("주문 일괄 등록에 실패하였습니다.");
      });
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
          helperText="주문 리스트를 업로드해주세요. (.xlsx, .xls, .csv)"
        ></TextField>
      </Box>
    </form>
  );
};

export default OrderExcelForm;
