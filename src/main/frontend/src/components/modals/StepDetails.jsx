import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const CreateStep = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Step</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateStep;
