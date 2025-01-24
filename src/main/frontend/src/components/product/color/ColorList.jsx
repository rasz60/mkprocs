import { useEffect, useState, useContext } from "react";
import {
  Box,
  Grid2,
  IconButton,
  Chip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
} from "@mui/material";
import {
  Search,
  Autorenew,
  HighlightOff,
  CheckCircleOutline,
  Close,
} from "@mui/icons-material";
import axios from "axios";
import { Ctx } from "../../../App.js";

const ColorList = () => {
  // global variants
  const { loader, handleChng } = useContext(Ctx);

  // category list
  const [colors, setColors] = useState(null);
  const [rows, setRows] = useState(0);

  const [srch, setSrch] = useState({
    srchType: "",
    srchKeywords: "",
  });

  const [crDtl, setCrDtl] = useState({
    pdColorNum: "",
    pdColorName: "",
    pdColorCode: "",
    pdColorDupChk: false,
  });

  // validation, error, navigate
  const [validated, setValidated] = useState(0);
  const [crName, setCrName] = useState({
    error: false,
    helperText: "색상 이름을 입력해주세요.",
  });

  const [mode, setMode] = useState(true);
  /*
    func : 카테고리 목록 조회 (st, sk) -> search type, keyword
  */
  const getColorList = async () => {
    // 로딩 컴포넌트 출력
    loader(0);

    let url = "/rest/pd/cr/list";
    let st = srch.srchType;
    let sk = srch.srchKeywords;

    if (st && sk) {
      url += "/" + st + "/" + sk;
    }

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

  const srchColors = async () => {
    let st = srch.srchType;
    let sk = srch.srchKeywords;

    if (st && sk) {
      getColorList();
    } else {
      alert("검색 유형과 키워드를 입력해주세요.");
      return false;
    }
  };

  const deleteColor = async (event, id) => {
    event.stopPropagation();
    loader(0);
    let chk = await window.confirm("색상을 삭제할까요?");

    if (chk) {
      await axios
        .delete("/rest/pd/cr/delete/" + id)
        .then((res) => {
          let cd = res.data.resultCode;
          let msg = res.data.resultMessage;
          alert(msg);
          if (cd === 200) {
            getColorList();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    loader(-1);
  };

  /*
    func : select-box, input 변경 시 binding
  */
  const crHandleChng = async (event) => {
    let { name, value } = event.target;

    // 입력 값 binding
    setCrDtl({ ...crDtl, [name]: value, pdColorDupChk: false });
  };

  /*
      func : 색상 이름 최종 validation
    */
  const crNameValue = (event) => {
    let { value } = event.target; // 입력 값
    crNameValidation(value, crHandleChng(event));
  };

  /*
      func : 색상 이름 validation
    */
  const crNameValidation = (value) => {
    // pdColorName input 상태 변경
    setCrName((prev) => {
      let updateCrName = { ...prev };

      let regExp = new RegExp(/^[A-Za-zㄱ-힣0-9]+$/); // 정규식

      if (!regExp.test(value) && value) {
        // 정규식 부합하지 않을 때
        updateCrName.error = true;
        updateCrName.helperText =
          "한글, 영문(대/소문자), 숫자로만 입력해주세요.";
      } else {
        // 정규식 부합
        updateCrName.error = false;
        updateCrName.helperText = "색상 이름을 입력해주세요.";
      }
      return updateCrName;
    });
  };

  /*
      func : 색상 코드, 색상 명 중복 조회
    */
  const dupchk = async () => {
    loader(0);

    let cd = crDtl.pdColorCode.replace("#", "");
    let nm = crDtl.pdColorName;
    let dc = crDtl.pdColorDupChk;

    let url = "/rest/pd/cr/dupchk/";
    if (cd && nm && !dc) {
      url += cd + "/" + nm;
      await axios
        .get(url)
        .then((res) => {
          let rst = res.data.resultCode;
          let rstMsg = res.data.resultMessage;
          alert(rstMsg);
          setCrDtl((prevCrDtl) => {
            let updateCrDtl = { ...prevCrDtl };

            if (rst === 200) {
              updateCrDtl.pdColorDupChk = true;
            }

            return updateCrDtl;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("색상 코드와 이름을 입력해주세요.");
    }
    loader(-1);
  };

  const triggerClick = () => {
    document.querySelector('input[name="pdColorCode"]').click();
  };

  /*
      func : regist 버튼 클릭 시
    */
  const handleSubmit = async (e) => {
    e.preventDefault();
    validation(e); // 입력 값 validation
  };

  /*
      func : 입력 값 validation
    */
  const validation = () => {
    let crNm = crDtl.pdColorName; // 색상 이름
    let crNameError = crName.error; // 색상 이름 validation
    let crCode = crDtl.pdColorCode; // 색상 코드
    let crDupChk = crDtl.pdColorDupChk; // 중복 체크 여부
    let valid = 0;
    let msg = "";

    if (!crNm) {
      msg = "색상 이름을 입력해주세요.";
    } else if (crNameError) {
      msg = "색상 이름은 영문, 한글, 숫자로만 입력해주세요.";
    } else if (!crCode) {
      msg = "색상 코드를 선택해주세요.";
    } else if (!crDupChk) {
      msg = "중복 여부를 확인해주세요.";
    } else {
      valid = 1;
    }

    setValidated(valid);
    if (valid === 1) fnSave();
    else alert(msg);
  };

  /*
      func : 저장
    */
  const fnSave = async () => {
    loader(0);
    let url = "/rest/pd/cr/create";
    await axios
      .post(url, JSON.stringify(crDtl), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert(res.data.resultMessage);
        if (res.data.resultCode === 200) {
          setCrDtl({
            pdColorNum: "",
            pdColorName: "",
            pdColorCode: "",
            pdColorDupChk: false,
          });
          getColorList();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    loader(-1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box id="pd-color-list-header" className="px-2">
        <Grid2 container spacing={2}>
          <Grid2 size={1}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="srch-select-label">Search</InputLabel>
              <Select
                labelId="srch-select-label"
                id="srch-select"
                name="srchType"
                value={srch.srchType}
                onChange={(event) => handleChng(event, setSrch, srch)}
              >
                <MenuItem value={""}>선택</MenuItem>
                <MenuItem value={1}>색상코드</MenuItem>
                <MenuItem value={2}>색상이름</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 size={5}>
            <FormControl fullWidth>
              <TextField
                name="srchKeywords"
                variant="standard"
                label="keywords..."
                value={srch.srchKeywords}
                onChange={(event) => handleChng(event, setSrch, srch)}
              ></TextField>
            </FormControl>
          </Grid2>
          <Grid2 size={1}>
            <IconButton className="mt-2" onClick={srchColors}>
              <Search font-size="small" />
            </IconButton>
          </Grid2>
          <Grid2 size={4}></Grid2>
          <Grid2 size={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton className="mt-2">
              <Autorenew font-size="small" onClick={getColorList} />
            </IconButton>
          </Grid2>
        </Grid2>
      </Box>
      <Box id="pd-color-pallete" className="mt-2">
        <Grid2 container spacing={2} sx={{ justifyContent: "flex-start" }}>
          <Grid2 size={1} className="pd-color-chips"></Grid2>

          {rows > 0
            ? [...Array(rows)].map((_, idx) => {
                const s = idx * 12;
                const e = s + (idx === 0 ? 11 : 12);
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
                        <Grid2 size={6}>
                          <span className="pd-color-name">
                            {color.pdColorName}
                          </span>
                        </Grid2>
                        <Grid2 size={1}>
                          <HighlightOff
                            fontSize="small"
                            className="pd-color-delete"
                            color="disabled"
                            onClick={(event) =>
                              deleteColor(event, color.pdColorNum)
                            }
                          />
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  );
                });
              })
            : null}
        </Grid2>
      </Box>
      <form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="mt-3"
      >
        <Box id="pd-color-form" className={mode ? "d-none" : "p-3 d-block"}>
          <Grid2 container fullWidth spacing={2}>
            <Grid2
              size={12}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton>
                <Close />
              </IconButton>
            </Grid2>
            <Grid2 size={1} sx={{ marginTop: "14px" }}>
              <FormControl fullWidth className="colors-input">
                <InputLabel
                  htmlFor="pdColorNum"
                  className="m-0"
                  sx={{ left: "-1em", top: "-0.5em" }}
                  required
                >
                  Color
                </InputLabel>
                <Grid2 container>
                  <Grid2 size={2}>
                    <FormControl fullWidth className="colors-input">
                      <TextField
                        type="color"
                        name="pdColorCode"
                        variant="standard"
                        className="mt-4"
                        value={crDtl.pdColorCode || ""}
                        onChange={crHandleChng}
                      />
                    </FormControl>
                  </Grid2>
                  <Grid2 size={10}>
                    <FormControl fullWidth id="color-code-input">
                      <TextField
                        name="pdColorCode"
                        variant="standard"
                        className="mt-4"
                        value={crDtl.pdColorCode || ""}
                        onClick={triggerClick}
                        slotProps={{
                          input: {
                            readOnly: true,
                          },
                        }}
                      />
                    </FormControl>
                  </Grid2>
                </Grid2>
                <FormHelperText className="m-0">
                  색상을 선택해주세요.
                </FormHelperText>
              </FormControl>
            </Grid2>
            <Grid2 size={9.4}>
              <FormControl fullWidth>
                <TextField
                  error={crName.error}
                  name="pdColorName"
                  label="Color Name"
                  variant="standard"
                  helperText={crName.helperText}
                  className="mt-4"
                  value={crDtl.pdColorName}
                  onChange={crNameValue}
                  required
                />
              </FormControl>
            </Grid2>
            <Grid2 size={0.8} className="row-side-btn-box">
              <Button
                variant="outlined"
                color="success"
                startIcon={<CheckCircleOutline />}
                size="small"
                disabled={
                  !crDtl.pdColorCode ||
                  !crDtl.pdColorName ||
                  crDtl.pdColorDupChk ||
                  crName.error
                }
                onClick={dupchk}
              >
                중복확인
              </Button>
            </Grid2>
            <Grid2 size={0.8} className="row-side-btn-box">
              <Button
                variant="outlined"
                color="primary"
                startIcon={<CheckCircleOutline />}
                size="small"
                disabled={!crDtl.pdColorDupChk}
                onClick={handleSubmit}
              >
                등록하기
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </form>
    </Box>
  );
};

export default ColorList;
