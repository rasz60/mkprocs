import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const CategoryForm = () => {
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const fnSave = async () => {
    let url = "/rest/pd/ct/create";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pdCategoryName: document.querySelector("#pdCategoryName").value,
      }),
    });

    let data = await res.json();

    if (data.resultCode === 200) {
      alert(data.resultMessage);
      navigate("/admin/product/category/list");
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
          <Form.Label htmlFor="pdCategoryName">Category Name</Form.Label>
          <Form.Control
            type="text"
            id="pdCategoryName"
            aria-describedby="pdCategoryNameDesc"
            required
          />
          <Form.Text id="pdCategoryNameDesc" muted>
            등록할 카테고리 이름을 입력해주세요.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            카테고리 이름을 입력해주세요.
          </Form.Control.Feedback>
        </Form.Group>
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

export default CategoryForm;
