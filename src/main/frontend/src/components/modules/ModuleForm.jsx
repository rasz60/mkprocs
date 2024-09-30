import Main from "../../Main";
import Form from "react-bootstrap/Form";

const ModuleForm = () => {
  return (
    <Main title="" description="">
      <Form.Group class="form-box">
        <Form.Label htmlFor="moduleName">Module Name</Form.Label>
        <Form.Control
          type="text"
          id="moduleName"
          aria-describedby="moduleNameDesc"
          required
        />
        <Form.Text id="moduleNameDesc" muted>
          등록할 기능의 이름을 입력해주세요.
        </Form.Text>
      </Form.Group>

      <Form.Group class="form-box">
        <Form.Label htmlFor="modulePath">Module Path</Form.Label>
        <Form.Control
          type="text"
          id="moduleName"
          aria-describedby="moduleNameDesc"
          required
        />
        <Form.Text id="moduleNameDesc" muted>
          호출할 API URL을 입력해주세요.
        </Form.Text>
      </Form.Group>
    </Main>
  );
};

export default ModuleForm;
