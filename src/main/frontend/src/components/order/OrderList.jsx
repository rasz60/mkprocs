import { useEffect, useState } from "react";
import { Box, Grid2 } from "@mui/material";
import { ListItem } from "../../assets/js/common";

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
      {!orders ? (
        <h3>등록된 주문이 없습니다.</h3>
      ) : (
        orders.map((order, idx) => (
          <Grid2 container spacing={2} id={idx}>
            <Grid2 size={4}>
              <ListItem>{order.pfName}</ListItem>
            </Grid2>
            <Grid2 size={4}>
              <ListItem>{order.pfStartDate}</ListItem>
            </Grid2>
            <Grid2 size={4}>
              <ListItem>{order.pfEndDate}</ListItem>
            </Grid2>
          </Grid2>
        ))
      )}
    </Box>
  );
};

export default OrderList;
