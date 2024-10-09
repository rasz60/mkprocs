import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FactoryList = () => {
  const [factories, setFactories] = useState(null);

  useEffect(() => {
    const getFactoryList = async () => {
      const response = await fetch("/rest/fc/list");
      const result = await response.json();

      setFactories(result.result.fcList);
    };

    getFactoryList();
  }, []);

  return (
    <div>
      <Row>
        <Col md>이름</Col>
        <Col md>계약시작일</Col>
        <Col md>계약종료일</Col>
      </Row>
      {!factories ? (
        <h3>등록된 제조사가 없습니다.</h3>
      ) : (
        factories.map((factory, idx) => (
          <Row key={idx}>
            <Col md>{factory.fcName}</Col>
            <Col md>{factory.fcStartDate}</Col>
            <Col md>{factory.fcEndDate}</Col>
          </Row>
        ))
      )}
    </div>
  );
};

export default FactoryList;
