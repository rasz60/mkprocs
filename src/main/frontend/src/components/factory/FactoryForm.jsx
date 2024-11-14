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
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fcName: document.querySelector("#fcName").value,
        fcStartDate: new Date(document.querySelector("#fcStartDate").value),
        fcEndDate: new Date(document.querySelector("#fcEndDate").value),
      }),
    });

    let data = await res.json();

    if (data.resultCode === 200) {
      alert(data.resultMessage);
      navigate("/admin/factory/list");
    }
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

    console.log(form.checkValidity());

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log("?");
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
