import { useEffect, useState } from "react";
import { Box, Grid2 } from "@mui/material";
import { ListItem } from "../../assets/js/common";

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
      {!platforms ? (
        <h3>등록된 플랫폼이 없습니다.</h3>
      ) : (
        platforms.map((platform, idx) => (
          <Grid2 container spacing={2} id={idx}>
            <Grid2 size={4}>
              <ListItem>{platform.pfName}</ListItem>
            </Grid2>
            <Grid2 size={4}>
              <ListItem>{platform.pfStartDate}</ListItem>
            </Grid2>
            <Grid2 size={4}>
              <ListItem>{platform.pfEndDate}</ListItem>
            </Grid2>
          </Grid2>
        ))
      )}
    </Box>
  );
};

export default PlatformList;
