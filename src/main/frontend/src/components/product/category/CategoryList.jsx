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
import { ctx } from "../../../App.js";

const CategoryList = () => {
  // global variants
  const { ListItem, loader, handleChng } = useContext(ctx);

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
        } else {
          nct = categories;
          return;
        }
      }
      // 하위 카테고리 닫았을 때
      else {
        let gid = targetCt.pdParentCategoryNum; // 선택한 카테고리의 parent num
        let valid = false; // 하위 카테고리 여부 flag
        let cnt = 0; // 중단점 flag
        for (let i = 0; i < categories.length; i++) {
          // 시작 카테고리 idx 다음부터, 선택한 카테고리와 같은 레벨의 다음 순서 카테고리까지만 진입
          if (i > targetIdx && cnt === 0) {
            // 선택한 카테고리와 부모 카테고리 id가 같거나, 선택한 카테고리의 하위 레벨이 아니면 +1
            cnt +=
              categories[i].pdParentCategoryNum === gid ||
              categories[i].pdCategoryLevel < lv
                ? 1
                : 0;
            valid = categories[i].pdCategoryLevel >= lv; // 선택한 카테고리 분류 레벨보다 하위 레벨인지 확인
          } else {
            valid = false; // 카테고리 표시
          }

          // 중단점에 도달한 경우
          if (cnt > 0) {
            // 현재 idx부터 전체 추가 후 반복 종료
            nct.push(...categories.splice(i));
            break;
          }
          // 중단점에 도달하지 않은 경우
          else {
            // 하위 카테고리 여부가 false일 때만 표시
            if (!valid) {
              nct.push(categories[i]);
            }
          }
        }
      }
      // 카테고리 목록 재설정
      setCategory(nct);
    }

    // 로딩 컴포넌트 종료
    loader(-1);
  };
  /*
    func : 카테고리 상세 조회
  */
  const showDetails = async (event) => {
    // 로딩 컴포넌트 종료
    loader(0);

    // 부모 요소 event 전달 차단
    event.stopPropagation();

    // 초기화, 수정, 삭제 버튼 활성화
    let btns = document.querySelector("#ud-buttons");
    btns.className = btns.className.replace("d-none", "d-flex");

    // 선택한 카테고리 정보
    let targetIdx = event.currentTarget.id;
    let targetCt = categories[targetIdx];

    // 변경 전 정보 설정
    targetCt.oldCategoryLv1Num = targetCt.pdCategoryLv1Num;
    targetCt.oldCategoryLv2Num = targetCt.pdCategoryLv2Num;
    targetCt.oldCategoryLevel = targetCt.pdCategoryLevel;
    setCtDtl(targetCt);

    // 상위 카테고리 정보 조회
    for (let i = 1; i < targetCt.pdCategoryLevel; i++) {
      let arr = await getCategoryList(i);
      i === 1 ? setCtLv1Dtl(arr) : setCtLv2Dtl(arr);
    }

    // 로딩 컴포넌트 종료
    loader(-1);
  };

  /*
    func : 카테고리 목록 초기화
   */
  const resetList = () => {
    getCategoryList(); // 대분류만 조회
    resetDtl(); // 상세 조회 삭제
  };

  /*
    func : 카테고리 상세 조회 초기화
  */
  const resetDtl = () => {
    // 초기화, 수정, 삭제 버튼 비활성화
    let btns = document.querySelector("#ud-buttons");
    btns.className = btns.className.replace("d-flex", "d-none");

    // 상세정보 value 초기화
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

  /*
    func : 카테고리 수정
  */
  const updateDtl = async () => {
    await axios
      .post("/rest/pd/ct/update", ctDtl)
      .then((res) => {
        let code = res.data.resultCode;
        let msg = res.data.resultMessage;
        alert(msg);
        if (code === 200) {
          resetList();
          resetDtl();
        }
      })
      .catch((err) => {
        alert("일시적인 오류로 실패하였습니다.");
      });
  };

  /*
    func : 카테고리 삭제
  */
  const deleteDtl = async () => {
    let lv = ctDtl.pdCategoryLevel;
    let chk = true;
    if (lv < 3) {
      chk = window.confirm(
        "선택한 하위의 카테고리가 모두 삭제됩니다. 삭제할까요?"
      );
    }

    if (chk) {
      await axios
        .delete("/rest/pd/ct/delete/" + ctDtl.pdCategoryNum)
        .then((res) => {
          let code = res.data.resultCode;
          let msg = res.data.resultMessage;
          alert(msg);
          if (code === 200) {
            resetList();
            resetDtl();
          }
        })
        .catch((err) => {
          alert("일시적인 오류로 실패하였습니다.");
        });
    }
  };

  /*
    func : 카테고리 상세 페이지 버튼 클릭 시
  */
  const handleBtns = (event) => {
    let type = event.target.id;

    switch (type) {
      // 초기화 버튼
      case "btn-rst": {
        resetDtl();
        break;
      }
      // 수정 버튼
      case "btn-upd": {
        updateDtl();
        break;
      }
      // 삭제 버튼
      case "btn-del": {
        deleteDtl();
        break;
      }

      default: {
        break;
      }
    }
  };

  /*
    func : 페이지 로드 시
  */
  useEffect(() => {
    getCategoryList(); // 대분류만 조회
  }, []);

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
                  readOnly={true}
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
                  readOnly={true}
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
              readOnly={true}
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
