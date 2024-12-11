import { useEffect, useState } from "react";
import { Box, Grid2 } from "@mui/material";
import { ListItem } from "../../assets/js/common";

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
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2} id="grd-list-header">
        <Grid2 size={4}>
          <ListItem>이름</ListItem>
        </Grid2>
        <Grid2 size={4}>
          <ListItem>계약시작일</ListItem>
        </Grid2>
        <Grid2 size={4}>
          <ListItem>계약종료일</ListItem>
        </Grid2>
      </Grid2>
      {!products ? (
        <h3>등록된 상품이 없습니다.</h3>
      ) : (
        products.map((product, idx) => (
          <Grid2 container spacing={2} id={idx}>
            <Grid2 size={4}>
              <ListItem>{product.pdName}</ListItem>
            </Grid2>
            <Grid2 size={4}>
              <ListItem>{product.pdFcInfo.fcName}</ListItem>
            </Grid2>
            <Grid2 size={4}>
              <ListItem>{product.pdMount}</ListItem>
            </Grid2>
          </Grid2>
        ))
      )}
    </Box>
  );
};

export default ProductList;
