import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OrderList = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const getOrderList = async () => {
      const response = await fetch("/rest/od/list");
      const result = await response.json();

      setOrders(result.result.odList);
    };

    getOrderList();
  }, []);

  return (
    <div>
      <Row>
        <Col md>이름</Col>
        <Col md>계약시작일</Col>
        <Col md>계약종료일</Col>
      </Row>
      {!orders ? (
        <h3>등록된 주문이 없습니다.</h3>
      ) : (
        orders.map((order, idx) => (
          <Row key={idx}>
            <Col md>{order.pfName}</Col>
            <Col md>{order.pfStartDate}</Col>
            <Col md>{order.pfEndDate}</Col>
          </Row>
        ))
      )}
    </div>
  );
};

export default OrderList;
