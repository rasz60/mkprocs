import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const FactoryForm = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Form.Group className="form-box">
          <Form.Label htmlFor="fcName">Factory Name</Form.Label>
          <Form.Control
            type="text"
            id="fcName"
            aria-describedby="fcNameDesc"
            required
          />
          <Form.Text id="fcNameDesc" muted>
            등록할 제조사 이름을 입력해주세요.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            제조사 이름을 입력해주세요.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Col md>
          <Form.Group className="form-box">
            <Form.Label htmlFor="fcStartDate">Start Date</Form.Label>
            <Form.Control
              type="date"
              id="fcStartDate"
              aria-describedby="fcStartDateDesc"
              required
            />
            <Form.Text id="fcStartDateDesc" muted>
              시작일을 입력해주세요.
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group className="form-box">
            <Form.Label htmlFor="fcEndDate">End Date</Form.Label>
            <Form.Control
              type="date"
              id="fcEndDate"
              aria-describedby="fcEndDateDesc"
              required
            />
            <Form.Text id="fcEndDateDesc" muted>
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

export default FactoryForm;
