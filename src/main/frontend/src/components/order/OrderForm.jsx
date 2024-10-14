import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const fnSave = async () => {
    let url = "/rest/pd/create";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    let data = await res.json();

    if (data.resultCode === 200) {
      alert(data.resultMessage);
      navigate("/admin/product/list");
    }
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col md>
          <Form.Group className="form-box">
            <Form.Label htmlFor="orderData">Files</Form.Label>
            <Form.Control
              type="file"
              id="orderData"
              aria-describedby="pdFcNumDesc"
              required
            />
            <Form.Text id="pdFcNumDesc" muted>
              등록할 상품 리스트를 업로드해주세요.
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default OrderForm;
