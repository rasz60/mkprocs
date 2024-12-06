import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid2, Paper } from "@mui/material";
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2} id="grd-list-header">
        <Grid2 size={4}>
          <Item>이름</Item>
        </Grid2>
        <Grid2 size={4}>
          <Item>계약시작일</Item>
        </Grid2>
        <Grid2 size={4}>
          <Item>계약종료일</Item>
        </Grid2>
      </Grid2>
      {!factories ? (
        <h3>등록된 제조사가 없습니다.</h3>
      ) : (
        factories.map((factory, idx) => (
          <Grid2 container spacing={2} id={idx}>
            <Grid2 size={4}>
              <Item>{factory.fcName}</Item>
            </Grid2>
            <Grid2 size={4}>
              <Item>{factory.fcStartDate}</Item>
            </Grid2>
            <Grid2 size={4}>
              <Item>{factory.fcEndDate}</Item>
            </Grid2>
          </Grid2>
        ))
      )}
    </Box>
  );
};

export default FactoryList;
