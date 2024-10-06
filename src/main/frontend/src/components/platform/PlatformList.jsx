import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PlatformList = () => {
  const [platforms, setPlatforms] = useState(null);

  useEffect(() => {
    const getPlatformList = async () => {
      const response = await fetch("/rest/pf/list");
      const result = await response.json();

      setPlatforms(result.result.pfList);
    };

    getPlatformList();
  }, []);

  return (
    <div>
      <Row>
        <Col md>이름</Col>
        <Col md>계약시작일</Col>
        <Col md>계약종료일</Col>
      </Row>
      {!platforms ? (
        <h3>등록된 플랫폼이 없습니다.</h3>
      ) : (
        platforms.map((platform, idx) => (
          <Row key={idx}>
            <Col md>{platform.pfName}</Col>
            <Col md>{platform.pfStartDate}</Col>
            <Col md>{platform.pfEndDate}</Col>
          </Row>
        ))
      )}
    </div>
  );
};

export default PlatformList;
