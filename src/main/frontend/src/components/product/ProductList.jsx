import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProductList = async () => {
      const response = await fetch("/rest/pd/list");
      const result = await response.json();

      setProducts(result.result.pdList);
    };

    getProductList();
  }, []);

  return (
    <div>
      <Row>
        <Col md>이름</Col>
        <Col md>계약시작일</Col>
        <Col md>계약종료일</Col>
      </Row>
      {!products ? (
        <h3>등록된 상품이 없습니다.</h3>
      ) : (
        products.map((product, idx) => (
          <Row key={idx}>
            <Col md>{product.pdName}</Col>
            <Col md>{product.pdFcInfo.fcName}</Col>
            <Col md>{product.pdMount}</Col>
          </Row>
        ))
      )}
    </div>
  );
};

export default ProductList;
