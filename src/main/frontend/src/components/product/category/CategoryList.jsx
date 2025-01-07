import { useEffect, useState, useContext } from "react";
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
  Button,
  IconButton,
} from "@mui/material";
import {
  AddBox,
  IndeterminateCheckBox,
  Sync,
  Delete,
  AutoFixHigh,
} from "@mui/icons-material";
import axios from "axios";
import { Ctx } from "../../../App.js";

const CategoryList = () => {
  // global variants
  const { ListItem, loader, handleChng } = useContext(Ctx);

  // category list
  const [categories, setCategory] = useState(null);

  // category Details
  const [ctDtl, setCtDtl] = useState({
    oldCategoryLv1Num: 0,
    oldCategoryLv2Num: 0,
    oldCategoryLevel: 0,
    pdCategoryLv1Num: 0,
    pdCategoryLv2Num: 0,
    pdCategoryLevel: 0,
    pdCategoryName: "",
    pdCategoryNum: 0,
    pdParentCategoryNum: 0,
    pdParentCategoryChng: false,
  });

  // category Lv1,2 list
  const [ctLv1Dtl, setCtLv1Dtl] = useState([]);
  const [ctLv2Dtl, setCtLv2Dtl] = useState([]);

  /*
    func : 카테고리 목록 조회 (lv, pid = null : 대분류만 조회 / lv, pid != null : 하위 카테고리 조회)
  */
  const getCategoryList = async (lv, pid) => {
    // 로딩 컴포넌트 출력
    loader(0);

    let url = "/rest/pd/ct/list";
    if (lv) url += "/" + lv;
    if (lv && pid) url += "/" + pid;

    let arr = [];
    await axios
      .get(url)
      .then((res) => {
        if (lv || pid) {
          // 하위 카테고리 조회 시, response return
          arr = res.data.result.pdCtList;
        } else {
          // 대분류만 조회 시, 카테고리 목록 초기화
          setCategory(res.data.result.pdCtList);
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
    func : 하위 카테고리 조회
  */
  const showChild = async (event) => {
    // 로딩 컴포넌트 출력
    loader(0);

    // 상위 엘리먼트 event 전달 차단
    event.stopPropagation();

    // 선택한 카테고리 정보
    let targetIdx = Number(event.currentTarget.id);
    let targetCt = categories[targetIdx];

    // 하위 카테고리가 있을 때
    if (targetCt.pdCategoryChildCnt > 0) {
      // 하위 카테고리 오픈 여부 toggle
      targetCt.pdChildOpen = !targetCt.pdChildOpen;

      // 하위 카테고리 조회 조건 설정
      let lv = targetCt.pdCategoryLevel + 1;
      let pid = targetCt.pdCategoryNum;
      let nct = [];

      // 하위 카테고리 열었을 때
      if (targetCt.pdChildOpen) {
        // 하위 카테고리 조회
        let cct = await getCategoryList(lv, pid);

        // 조회된 하위 카테고리 있을 때
        if (cct.length > 0) {
          // 카테고리 전체 목록에 추가
          for (let i = 0; i < categories.length; i++) {
            nct.push(categories[i]);
            // 부모 카테고리 값 다음 순서로 하위 카테고리 추가
            if (categories[i].pdCategoryNum === pid) {
              nct.push(...cct);
            }
          }
        }
      }
      // 하위 카테고리 닫았을 때
      else {
        let gid = targetCt.pdParentCategoryNum;
        let valid1 = false;
        let valid2 = false;
        let cnt = 0;
        for (let i = 0; i < categories.length; i++) {
          // 시작 카테고리 idx 이상일 때
          if (i >= targetIdx) {
            valid1 = cnt < 2; // 같은 pid 카테고리 카운트가 2보다 작을 때
            if (valid1) {
              valid1 = categories[i].pdParentCategoryNum === gid; // 선택한 카테고리의 pid와 같은지 확인
              valid2 = categories[i].pdCategoryLevel >= lv; // 선택한 카테고리 분류 레벨보다 크거나 같은지 확인
              if (valid1) cnt++; // 같으면 cnt++
            }

            if (cnt > 1) {
              valid1 = false;
              valid2 = false;
            }

            console.log(i, targetIdx, categories[i], cnt, gid, valid1, valid2);
          }

          if (!valid1 && !valid2) {
            nct.push(categories[i]);
          }
        }
      }

      setCategory(nct);
    }
    loader(-1);
  };

  const showDetails = async (event) => {
    event.stopPropagation();
    loader(0);

    let btns = document.querySelector("#ud-buttons");
    btns.className = btns.className.replace("d-none", "d-flex");

    let targetIdx = event.currentTarget.id;
    let targetCt = categories[targetIdx];

    targetCt.oldCategoryLv1Num = targetCt.pdCategoryLv1Num;
    targetCt.oldCategoryLv2Num = targetCt.pdCategoryLv2Num;
    targetCt.oldCategoryLevel = targetCt.pdCategoryLevel;
    setCtDtl(targetCt);

    for (let i = 1; i < targetCt.pdCategoryLevel; i++) {
      let arr = await getCategoryList(i);
      i === 1 ? setCtLv1Dtl(arr) : setCtLv2Dtl(arr);
    }

    loader(-1);
  };

  const resetList = () => {
    getCategoryList();
    resetDtl();
  };

  const resetDtl = () => {
    let btns = document.querySelector("#ud-buttons");
    btns.className = btns.className.replace("d-flex", "d-none");

    setCtDtl({
      oldCategoryLv1Num: 0,
      oldCategoryLv2Num: 0,
      oldCategoryLevel: 0,
      pdCategoryLv1Num: 0,
      pdCategoryLv2Num: 0,
      pdCategoryLevel: 0,
      pdCategoryName: "",
      pdCategoryNum: 0,
      pdParentCategoryNum: 0,
      pCtChng: false,
    });
  };

  const updateDtl = async () => {
    await axios
      .post("/rest/pd/ct/update", ctDtl)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteDtl = () => {};

  const handleBtns = (event) => {
    let type = event.target.id;

    switch (type) {
      case "btn-rst": {
        resetDtl();
        break;
      }

      case "btn-upd": {
        updateDtl();
        break;
      }

      case "btn-del": {
        deleteDtl();
        break;
      }

      default: {
        break;
      }
    }
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
      <Grid2 container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid2
          size={4}
          container
          id="grd-list-category"
          sx={{ justifyContent: "flex-end" }}
        >
          <IconButton size="small" onClick={resetList}>
            <Sync fontSize="inherit" />
          </IconButton>
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
          <Grid2
            container
            sx={{ justifyContent: "space-between" }}
            className="mt-3"
          >
            <Grid2 size={5.8}>
              <FormControl fullWidth required className="fc-select">
                <InputLabel htmlFor="pdCategoryLv1Name">대분류</InputLabel>
                <Select
                  id="pdCategoryLv1Name"
                  name="pdCategoryLv1Name"
                  variant="standard"
                  className="mt-3"
                  value={ctDtl.pdCategoryLv1Num}
                  disabled={ctDtl.pdCategoryLv1Num ? false : true}
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
                  disabled={ctDtl.pdCategoryLv2Num ? false : true}
                >
                  {ctLv2Dtl.length > 0
                    ? ctLv2Dtl.map((ctLv2) => (
                        <MenuItem
                          key={ctLv2.pdCategoryNum}
                          value={ctLv2.pdCategoryNum}
                        >
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
              disabled={ctDtl.pdCategoryNum ? false : true}
              value={ctDtl.pdCategoryLevel}
              onChange={(event) => handleChng(event, setCtDtl, ctDtl)}
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
              disabled={ctDtl.pdCategoryNum ? false : true}
              value={ctDtl ? ctDtl.pdCategoryName : null}
              onChange={(event) => handleChng(event, setCtDtl, ctDtl)}
              required
            />
          </FormControl>
          <Divider />
          <Grid2
            id="ud-buttons"
            container
            className="d-none"
            sx={{ justifyContent: "flex-end" }}
          >
            <Grid2 id="btns" size={4}>
              <Button
                size="small"
                variant="outlined"
                startIcon={<Sync />}
                onClick={handleBtns}
                id="btn-rst"
              >
                초기화
              </Button>
              <Button
                size="small"
                color="success"
                variant="outlined"
                startIcon={<AutoFixHigh />}
                onClick={handleBtns}
                id="btn-upd"
              >
                수정
              </Button>
              <Button
                size="small"
                color="error"
                variant="outlined"
                startIcon={<Delete />}
                onClick={handleBtns}
                id="btn-del"
              >
                삭제
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default CategoryList;
