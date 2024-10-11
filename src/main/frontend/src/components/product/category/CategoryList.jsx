import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CategoryList = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategoryList = async () => {
      const response = await fetch("/rest/pd/ct/list");
      const result = await response.json();

      setCategories(result.result.pdCtList);
    };

    getCategoryList();
  }, []);

  return (
    <div>
      <Row>
        <Col md>이름</Col>
      </Row>
      {!categories ? (
        <h3>등록된 카테고리가 없습니다.</h3>
      ) : (
        categories.map((category, idx) => (
          <Row key={idx}>
            <Col md>{category.pdCategoryName}</Col>
          </Row>
        ))
      )}
    </div>
  );
};

export default CategoryList;
