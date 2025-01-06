import { useEffect, useState } from "react";
import {
  Box,
  Grid2,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextField,
  Divider,
} from "@mui/material";
import { ListItem } from "../../../assets/js/common";
import { AddBox, IndeterminateCheckBox } from "@mui/icons-material";
import axios from "axios";
import LinearIndeterminate from "../../modals/loading";

const CategoryList = () => {
  const [categories, setCategory] = useState(null);
  const [ctDtl, setCtDtl] = useState({
    pdCategoryLv1Num: 0,
    pdCategoryLv2Num: 0,
    pdCategoryLevel: 0,
    pdCategoryName: "",
    pdCategoryNum: 0,
    pdParentCategoryNum: 0,
    pCtChng: false,
  });

  const [ctLv1Dtl, setCtLv1Dtl] = useState([]);
  const [ctLv2Dtl, setCtLv2Dtl] = useState([]);

  const getCategoryList = async (lv, pid) => {
    let url = "/rest/pd/ct/list";

    if (lv) url += "/" + lv;
    if (lv && pid) url += "/" + pid;

    let arr = [];
    await axios
      .get(url)
      .then((res) => {
        if (lv || pid) {
          arr = res.data.result.pdCtList;
        } else {
          setCategory(res.data.result.pdCtList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return arr;
  };

  const showChild = async (event) => {
    event.stopPropagation();
    let targetIdx = event.currentTarget.id;
    let targetCt = categories[targetIdx];
    if (targetCt.pdCategoryChildCnt > 0) {
      targetCt.pdChildOpen = !targetCt.pdChildOpen;

      let lv = targetCt.pdCategoryLevel + 1;
      let pid = targetCt.pdCategoryNum;
      let nct = [];

      if (targetCt.pdChildOpen) {
        let cct = await getCategoryList(lv, pid);
        if (cct.length > 0) {
          for (let i = 0; i < categories.length; i++) {
            nct.push(categories[i]);
            if (categories[i].pdCategoryNum === pid) {
              nct.push(...cct);
            }
          }
        }
      } else {
        let valid1 = false;
        let valid2 = false;
        for (let i = 0; i < categories.length; i++) {
          valid2 = categories[i].pdCategoryLevel >= lv;

          if (!valid1 && !valid2) {
            nct.push(categories[i]);
          }

          valid1 = categories[i].pdCategoryNum === pid;
        }
      }

      setCategory(nct);
    }
  };

  const showDetails = async (event) => {
    event.stopPropagation();
    let targetIdx = event.currentTarget.id;
    let targetCt = categories[targetIdx];

    let lv1Arr = await getCategoryList(1);
    setCtLv1Dtl(lv1Arr); // 대분류 초기화
    let lv2Arr = await getCategoryList(2);
    setCtLv2Dtl(lv2Arr); // 중분류 초기화
    setCtDtl(targetCt);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    const childMap = {};
    if (categories) {
      categories.forEach((item) => {
        if (!childMap[item.pdParentCategoryNum])
          childMap[item.pdParentCategoryNum] = [];

        childMap[item.pdParentCategoryNum].push(item);
      });
    }
  }, [categories]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <LinearIndeterminate />
      <Grid2 container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid2 size={4} container id="grd-list-category">
          <List sx={{ width: 1 }}>
            {!categories ? (
              <ListItem>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>카테고리를 등록해주세요.</ListItemText>
                </ListItemButton>
              </ListItem>
            ) : (
              categories.map((category, idx) => (
                <ListItem
                  key={idx}
                  spacing={2}
                  id={idx}
                  className={"pl-" + category.pdCategoryLevel}
                  onClick={showDetails}
                >
                  <ListItemButton>
                    <ListItemIcon id={idx} onClick={showChild}>
                      {Number(category.pdCategoryChildCnt) > 0 ? (
                        category.pdChildOpen ? (
                          <IndeterminateCheckBox />
                        ) : (
                          <AddBox />
                        )
                      ) : null}
                    </ListItemIcon>
                    <ListItemText className="ct-name">
                      {category.pdCategoryName}{" "}
                      <span id="childCnt">
                        {category.pdCategoryLevel === 3
                          ? null
                          : "(" + category.pdCategoryChildCnt + ")"}
                      </span>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))
            )}
          </List>
        </Grid2>
        <Grid2 size={7} id="grd-desc-category">
          <Grid2 container className="ct-desc-label">
            <Grid2 size={2}>상위 카테고리</Grid2>
            <Grid2 size={10}></Grid2>
          </Grid2>
          <Grid2 container sx={{ justifyContent: "space-between" }}>
            <Grid2 size={5.8}>
              <FormControl fullWidth required className="fc-select">
                <InputLabel htmlFor="pdCategoryLv1Name">대분류</InputLabel>
                <Select
                  id="pdCategoryLv1Name"
                  name="pdCategoryLv1Name"
                  variant="standard"
                  className="mt-3"
                  value={ctDtl.pdCategoryLv1Num}
                  readOnly={ctLv1Dtl.length > 0 ? false : true}
                  disabled={ctDtl.pCtChng}
                >
                  {ctLv1Dtl.length > 0
                    ? ctLv1Dtl.map((ctLv1) => (
                        <MenuItem
                          key={ctLv1.pdCategoryNum}
                          value={ctLv1.pdCategoryNum}
                        >
                          {ctLv1.pdCategoryName}
                        </MenuItem>
                      ))
                    : null}
                </Select>
                <FormHelperText>상위 대분류를 선택해주세요.</FormHelperText>
              </FormControl>
            </Grid2>
            <Grid2 size={5.8} id="lv2">
              <FormControl fullWidth required className="fc-select">
                <InputLabel htmlFor="pdCategoryLv2Name">중분류</InputLabel>
                <Select
                  id="pdCategoryLv2Name"
                  name="pdCategoryLv2Name"
                  variant="standard"
                  className="mt-3"
                  value={ctDtl.pdCategoryLv2Num}
                  readOnly={ctLv2Dtl.length > 0 ? false : true}
                >
                  {ctLv2Dtl.length > 0
                    ? ctLv2Dtl.map((ctLv2) => (
                        <MenuItem value={ctLv2.pdCategoryNum}>
                          {ctLv2.pdCategoryName}
                        </MenuItem>
                      ))
                    : null}
                </Select>
                <FormHelperText>상위 중분류를 선택해주세요.</FormHelperText>
              </FormControl>
            </Grid2>
          </Grid2>
          <Divider />
          <p className="ct-desc-label">카테고리</p>
          <FormControl fullWidth required className="mt-3 fc-select">
            <InputLabel htmlFor="pdCategoryLevel">Category Level</InputLabel>
            <Select
              id="pdCategoryLevel"
              name="pdCategoryLevel"
              variant="standard"
              value={ctDtl ? ctDtl.pdCategoryLevel : null}
              className="mt-3"
            >
              <MenuItem value={1}>대분류</MenuItem>
              <MenuItem value={2}>중분류</MenuItem>
              <MenuItem value={3}>소분류</MenuItem>
            </Select>
            <FormHelperText>분류 단계를 선택해주세요.</FormHelperText>
          </FormControl>
          <Divider />
          <p className="ct-desc-label">카테고리 이름</p>
          <FormControl fullWidth>
            <TextField
              name="pdCategoryName"
              label="Category Name"
              variant="standard"
              helperText="등록할 카테고리 이름을 입력해주세요."
              className="mt-4"
              value={ctDtl ? ctDtl.pdCategoryName : null}
              required
            />
          </FormControl>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default CategoryList;
