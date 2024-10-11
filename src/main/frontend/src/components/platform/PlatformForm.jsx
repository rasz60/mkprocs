import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const PlatformForm = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const fnSave = async () => {
    let url = "/rest/pf/create";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pfName: document.querySelector("#pfName").value,
        pfStartDate: new Date(document.querySelector("#pfStartDate").value),
        pfEndDate: new Date(document.querySelector("#pfEndDate").value),
      }),
    });

    let data = await res.json();

    if (data.resultCode === 200) {
      alert(data.resultMessage);
      navigate("/admin/platform/list");
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    console.log(form.checkValidity());

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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Form.Group className="form-box">
          <Form.Label htmlFor="pfName">Platform Name</Form.Label>
          <Form.Control
            type="text"
            id="pfName"
            aria-describedby="pfNameDesc"
            required
          />
          <Form.Text id="pfNameDesc" muted>
            등록할 플랫폼 이름을 입력해주세요.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            플랫폼 이름을 입력해주세요.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Col md>
          <Form.Group className="form-box">
            <Form.Label htmlFor="pfStartDate">Start Date</Form.Label>
            <Form.Control
              type="date"
              id="pfStartDate"
              aria-describedby="pfStartDateDesc"
              required
            />
            <Form.Text id="pfStartDateDesc" muted>
              시작일을 입력해주세요.
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group className="form-box">
            <Form.Label htmlFor="pfEndDate">End Date</Form.Label>
            <Form.Control
              type="date"
              id="pfEndDate"
              aria-describedby="pfEndDateDesc"
              required
            />
            <Form.Text id="pfEndDateDesc" muted>
              종료일을 입력해주세요.
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md className="d-flex justify-content-end">
          <Button className="btn-primary" type="submit">
            등록
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default PlatformForm;
