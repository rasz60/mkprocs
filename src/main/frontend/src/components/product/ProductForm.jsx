import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [validated, setValidated] = useState(false);
  const [factories, setFactories] = useState(null);
  const [platforms, setPlatforms] = useState(null);
  const [colors, setProductColors] = useState(null);

  useEffect(() => {
    factoryList();
  }, []);

  useEffect(() => {
    const selectFc = document.querySelector("#pdFcNum");

    selectFc.innerHTML = "";

    const optionEle = document.createElement("option");
    optionEle.value = "";
    optionEle.textContent = "제조사를 선택해주세요.";
    selectFc.appendChild(optionEle);

    if (factories != null) {
      for (var i = 0; i < factories.length; i++) {
        const optionEle = document.createElement("option");
        optionEle.value = factories[i].fcNum;
        optionEle.textContent = factories[i].fcName;
        selectFc.appendChild(optionEle);
      }
    }
  }, [factories]);

  const factoryList = async () => {
    let url = "/rest/fc/list";
    let res = await fetch(url);
    let resJson = await res.json();

    let fcList = resJson.result.fcList;

    if (fcList != null) {
      setFactories(fcList);
    }
  };

  const navigate = useNavigate();

  const fnSave = async () => {
    let url = "/rest/pd/create";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pdName: document.querySelector("#pdName").value,
        pdCategory: document.querySelector("#pdCategory").value,
        pdPrice: document.querySelector("#pdPrice").value,
        pdFcNum: document.querySelector("#pdFcNum").value,
        pdColorNum: document.querySelector("#pdColorNum").vaule,
      }),
    });

    let data = await res.json();

    if (data.resultCode === 200) {
      alert(data.resultMessage);
      navigate("/admin/product/list");
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
          <Form.Label htmlFor="pdName">Product Name</Form.Label>
          <Form.Control
            type="text"
            id="pdName"
            aria-describedby="pdNameDesc"
            required
          />
          <Form.Text id="pdNameDesc" muted>
            등록할 상품 이름을 입력해주세요.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            상품 이름을 입력해주세요.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Col md>
          <Form.Group className="form-box">
            <Form.Label htmlFor="pdFcNum">Factory</Form.Label>
            <Form.Select id="pdFcNum" aria-describedby="pdFcNumDesc" required>
              <option value="">선택해주세요.</option>
            </Form.Select>
            <Form.Text id="pdFcNumDesc" muted>
              제조사를 입력해주세요.
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md>
          <Form.Group className="form-box">
            <Form.Label htmlFor="pdCategory">Category</Form.Label>
            <Form.Select
              id="pdCategory"
              aria-describedby="pdCategoryDesc"
              required
            />
            <Form.Text id="pdCategoryDesc" muted>
              상품 카테고리을 입력해주세요.
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md>
          <Form.Group className="form-box">
            <Form.Label htmlFor="pdColorNum">Color</Form.Label>
            <Form.Select
              id="pdColorNum"
              aria-describedby="pdColorNumDesc"
              required
            />
            <Form.Text id="pdColorNumDesc" muted>
              색상을 입력해주세요.
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md>
          <Form.Group className="form-box">
            <Form.Label htmlFor="pdPrice">Price</Form.Label>
            <Form.Control
              type="number"
              id="pdPrice"
              aria-describedby="pdPriceDesc"
              min="1000"
              required
            />
            <Form.Text id="pdPriceDesc" muted>
              상품 가격을 입력해주세요.
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

export default ProductForm;
