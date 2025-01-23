import { useEffect, useState, useContext } from "react";
import {
  Box,
  Grid2,
  Button,
  Chip,
  TextField,
  FormControl,
} from "@mui/material";

import axios from "axios";
import { Ctx } from "../../../App.js";

const ColorList = () => {
  // global variants
  const { loader } = useContext(Ctx);

  // category list
  const [colors, setColors] = useState(null);
  const [rows, setRows] = useState(0);

  // category Details
  /*
  const [crDtl, setCrDtl] = useState({
    pdColorNum: "",
    pdColorName: "",
    pdColorCode: "",
    pdColorDupChk: false,
  });
    */
  /*
    func : 카테고리 목록 조회 (lv, pid = null : 대분류만 조회 / lv, pid != null : 하위 카테고리 조회)
  */
  const getColorList = async () => {
    // 로딩 컴포넌트 출력
    loader(0);

    let url = "/rest/pd/cr/list";

    let arr = [];
    await axios
      .get(url)
      .then((res) => {
        setColors(res.data.result.pdCrList);
        if (res.data.result.pdCrList.length > 0) {
          setRows(Math.ceil(res.data.result.pdCrList.length / 6));
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // 로딩 컴포넌트 삭제
    loader(-1);
    return arr;
  };

  /*
    func : 페이지 로드 시
  */
  useEffect(() => {
    getColorList(); // 대분류만 조회
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box id="pd-color-list-header">
        <Grid2 container spacing={2}>
          <Grid2 size={1}></Grid2>
          <Grid2 size={5}>
            <FormControl fullWidth>
              <TextField
                name="srchKeyword"
                variant="standard"
                label="검색"
              ></TextField>
            </FormControl>
          </Grid2>
          <Grid2 size={1}>
            <Button type="button" variant="outlined"></Button>
          </Grid2>
          <Grid2 size={4}></Grid2>
          <Grid2 size={1}>
            <Button type="button" variant="outlined"></Button>
          </Grid2>
        </Grid2>
      </Box>
      <Box id="pd-color-pallete" className="mt-2">
        <Grid2 container spacing={2} sx={{ justifyContent: "flex-start" }}>
          {rows > 0
            ? [...Array(rows)].map((_, idx) => {
                const s = idx * 12;
                const e = s + 12;
                const colorArr = colors.slice(s, e);

                return colorArr.map((color, idx) => {
                  return (
                    <Grid2
                      size={1}
                      id={color.pdColorNum}
                      className="pd-color-chips"
                    >
                      <Grid2 container spacing={1}>
                        <Grid2 size={3}>
                          <Chip
                            sx={{
                              border: "1px solid #ececec",
                              backgroundColor: color.pdColorCode,
                              width: "1.5em",
                              height: "1.5em",
                            }}
                          ></Chip>
                        </Grid2>
                        <Grid2 size={9}>
                          <span>{color.pdColorName}</span>
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  );
                });
              })
            : null}
        </Grid2>
      </Box>
    </Box>
  );
};

export default ColorList;
