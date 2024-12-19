import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  FormHelperText,
  Divider,
  Button,
} from "@mui/material";
import axios from "axios";

const FactoryForm = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [factory, setFactory] = useState({
    fcName: "",
    fcStartDate: "",
    fcEndDate: "",
  });

  const fnSave = async () => {
    let url = "/rest/fc/create";

    let JSONData = {
      fcName: factory.fcName,
      fcStartDate: new Date(factory.fcStartDate),
      fcEndDate: new Date(factory.fcEndDate),
    };

    await axios
      .post(url, JSON.stringify(JSONData), {
        headers: { "content-type": "application/json;charset=UTF-8" },
      })
      .then((res) => {
        if (res.data.resultCode === 200) {
          alert(res.data.resultMessage);
          navigate("/admin/factory/list");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("제조사 등록에 실패하였습니다. 시스템 관리자에게 문의해주세요.");
      });
  };

  const handleChng = (event) => {
    const { name, value } = event.target;
    setFactory({
      ...factory,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      fnSave();
    }

    setValidated(true);
  };

  return (
    <form noValidate validated={validated} onSubmit={handleSubmit}>
      <Box className="box-form">
        <FormControl fullWidth>
          <TextField
            id="fcName"
            name="fcName"
            label="Factory Name"
            variant="standard"
            helperText="등록할 제조사 이름을 입력해주세요."
            className="mt-4"
            value={factory.fcName}
            onChange={handleChng}
            required
          />
        </FormControl>

        <FormControl sx={{ width: 1 / 2 }} className="mt-4 fc-date">
          <InputLabel htmlFor="fcStartDate">Start Date</InputLabel>
          <TextField
            sx={{ width: "85%" }}
            type="date"
            id="fcStartDate"
            name="fcStartDate"
            variant="standard"
            className="dateTF"
            value={factory.fcStartDate}
            onChange={handleChng}
            required
          />
          <FormHelperText>계약 시작일을 선택해주세요.</FormHelperText>
        </FormControl>

        <FormControl sx={{ width: 1 / 2 }} className="mt-4 fc-date">
          <InputLabel htmlFor="fcEndDate">End Date</InputLabel>
          <TextField
            sx={{ width: "85%" }}
            type="date"
            id="fcEndDate"
            name="fcEndDate"
            variant="standard"
            className="dateTF"
            slotProps={{
              input: {
                placeHolder: "",
              },
            }}
            value={factory.fcEndDate}
            onChange={handleChng}
            required
          />
          <FormHelperText>계약 종료일을 선택해주세요.</FormHelperText>
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

export default FactoryForm;
