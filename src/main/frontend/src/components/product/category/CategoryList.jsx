import { useEffect, useState } from "react";
import { Box, Grid2 } from "@mui/material";
import { ListItem } from "../../../assets/js/common";
import axios from "axios";

const CategoryList = () => {
  const [categories, setCategory] = useState(null);

  useEffect(() => {
    const getCategoryList = async () => {
      await axios
        .get("/rest/pd/ct/list/" + null + "/" + null)
        .then((res) => {
          setCategory(res.data.result.categoryList);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getCategoryList();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2} id="grd-list-header">
        <Grid2 size={6}>
          <ListItem>분류</ListItem>
        </Grid2>
        <Grid2 size={6}>
          <ListItem>사용여부</ListItem>
        </Grid2>
      </Grid2>
      {!categories ? (
        <h3>등록된 상품이 없습니다.</h3>
      ) : (
        categories.map((category, idx) => (
          <Grid2 container spacing={2} id={idx}>
            <Grid2 size={6}>
              <ListItem>{category.pdCategoryName}</ListItem>
            </Grid2>
            <Grid2 size={6}>
              <ListItem>{category.pdCategoryState}</ListItem>
            </Grid2>
          </Grid2>
        ))
      )}
    </Box>
  );
};

export default CategoryList;
