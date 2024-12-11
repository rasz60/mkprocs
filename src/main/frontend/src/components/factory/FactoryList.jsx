import { useEffect, useState } from "react";
import { Box, Grid2 } from "@mui/material";
import { ListItem } from "../../assets/js/common";
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
      {!factories ? (
        <h3>등록된 제조사가 없습니다.</h3>
      ) : (
        factories.map((factory, idx) => (
          <Grid2 container spacing={2} id={idx}>
            <Grid2 size={4}>
              <ListItem>{factory.fcName}</ListItem>
            </Grid2>
            <Grid2 size={4}>
              <ListItem>{factory.fcStartDate}</ListItem>
            </Grid2>
            <Grid2 size={4}>
              <ListItem>{factory.fcEndDate}</ListItem>
            </Grid2>
          </Grid2>
        ))
      )}
    </Box>
  );
};

export default FactoryList;
