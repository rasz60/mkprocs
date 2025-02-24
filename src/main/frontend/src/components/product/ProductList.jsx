import { useEffect, useState, useContext } from "react";
import { ctx } from "../../App.js";
import { Box, Grid2 } from "@mui/material";
import { ListItem } from "../../assets/js/common";
import axios from "axios";

const ProductList = () => {
  const { loader } = useContext(ctx);

  const [products, setProducts] = useState([]);

  const getProductList = async () => {
    loader(0);
    await axios
      .get("/rest/pd/list")
      .then((res) => {
        let code = res.data.resultCode;
        let msg = res.data.resultMessage;

        if (code === 200) {
          setProducts(res.data.result.pdList);
        } else {
          alert(msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    loader(-1);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2} id="grd-list-header">
        <Grid2 size={2}>
          <ListItem>이름</ListItem>
        </Grid2>
        <Grid2 size={2}>
          <ListItem>제조사</ListItem>
        </Grid2>
        <Grid2 size={2}>
          <ListItem>대분류</ListItem>
        </Grid2>
        <Grid2 size={2}>
          <ListItem>중분류</ListItem>
        </Grid2>
        <Grid2 size={2}>
          <ListItem>소분류</ListItem>
        </Grid2>
        <Grid2 size={1}>
          <ListItem>가격</ListItem>
        </Grid2>
        <Grid2 size={1}>
          <ListItem>재고</ListItem>
        </Grid2>
      </Grid2>
      {products ? (
        products.map((product, idx) => (
          <Grid2 container spacing={2} id={idx}>
            <Grid2 size={2}>
              <ListItem>{product.pdName}</ListItem>
            </Grid2>
            <Grid2 size={2}>
              <ListItem>{product.pdFcInfo.fcName}</ListItem>
            </Grid2>
            <Grid2 size={2}>
              <ListItem>{product.pdCategoryLv1.pdCategoryName}</ListItem>
            </Grid2>
            <Grid2 size={2}>
              <ListItem>{product.pdCategoryLv2.pdCategoryName}</ListItem>
            </Grid2>
            <Grid2 size={2}>
              <ListItem>{product.pdCategoryLv3.pdCategoryName}</ListItem>
            </Grid2>
            <Grid2 size={1}>
              <ListItem>{product.pdPrice}</ListItem>
            </Grid2>
            <Grid2 size={1}>
              <ListItem>{product.pdMount}</ListItem>
            </Grid2>
          </Grid2>
        ))
      ) : (
        <h3>등록된 상품이 없습니다.</h3>
      )}
    </Box>
  );
};

export default ProductList;
