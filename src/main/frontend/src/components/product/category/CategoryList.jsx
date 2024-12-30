import { useEffect, useState } from "react";
import { Box, Grid2 } from "@mui/material";
import { ListItem } from "../../../assets/js/common";
import axios from "axios";

const CategoryList = () => {
  const [categories, setCategory] = useState(null);

  useEffect(() => {
    const getCategoryList = async () => {
      await axios
        .get("/rest/pd/ct/list")
        .then((res) => {
          setCategory(res.data.result.pdCtList);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getCategoryList();
    sortCategories();
  }, []);

  const sortCategories = () => {
    const childMap = {};

    categories.forEach((item) => {
      if (!childMap[item.pdParentCategoryNum])
        childMap[item.pdParentCategoryNum] = [];

      childMap[item.pdParentCategoryNum].push(item);
    });
  };

  const showChild = (event) => {
    let targetIdx = event.currentTarget.id;
    let targetCt = categories[targetIdx];

    console.log(targetCt);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2} id="grd-list-header">
        <Grid2 size={0.5}>
          <ListItem>+</ListItem>
        </Grid2>
        <Grid2 size={10}>
          <ListItem>분류명</ListItem>
        </Grid2>
        <Grid2 size={1.5}>
          <ListItem>사용여부</ListItem>
        </Grid2>
      </Grid2>
      {!categories ? (
        <h3>등록된 상품이 없습니다.</h3>
      ) : (
        categories.map((category, idx) => (
          <Grid2 container key={idx} spacing={2} id={idx} onClick={showChild}>
            <Grid2 size={0.5}>
              <ListItem>{category.pdCategoryLevel}</ListItem>
            </Grid2>
            <Grid2 size={10}>
              <ListItem>
                {category.pdCategoryName} ({category.pdCategoryChildCnt})
              </ListItem>
            </Grid2>
            <Grid2 size={1.5}>
              <ListItem>{category.pdCategoryState}</ListItem>
            </Grid2>
          </Grid2>
        ))
      )}
    </Box>
  );
};

export default CategoryList;
