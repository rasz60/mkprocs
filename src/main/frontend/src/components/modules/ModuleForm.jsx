import Main from "../../Main";
import { TextField, Box, Divider, Button } from "@mui/material";

const ModuleForm = () => {
  return (
    <Main title="" description="">
      <Box className="box-form">
        <TextField
          fullWidth
          id="moduleName"
          label="Module Name"
          variant="standard"
          className="mt-4"
          helperText="등록할 기능의 이름을 입력해주세요."
        />
        <TextField
          fullWidth
          id="modulePath"
          label="Module Path"
          variant="standard"
          className="mt-4"
          helperText="호출할 API의 URL을 입력해주세요."
        />
      </Box>
      <Divider />
      <Box className="box-button-bottom">
        <Button variant="contained">Regist</Button>
      </Box>
    </Main>
  );
};

export default ModuleForm;
