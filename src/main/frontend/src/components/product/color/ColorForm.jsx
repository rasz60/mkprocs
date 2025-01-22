import { useState, useContext } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  FormHelperText,
  Divider,
  Button,
  Grid2,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Ctx } from "../../../App.js";

const ColorForm = () => {
  // global variants
  const { loader } = useContext(Ctx);
  // validation, navigate
  const [validated, setValidated] = useState(0);
  const navigate = useNavigate();

  // form input, select-box
  const [crDtl, setCrDtl] = useState({
    pdColorNum: "",
    pdColorName: "",
    pdColorCode: "",
    pdColorDupChk: false,
  });

  /*
    func : select-box, input 변경 시 binding
  */
  const handleChng = async (event) => {
    let { name, value } = event.target;

    if (name === "pdColorName" && value && !value.match(/[A-aㄱ-힣0-9]/)) {
      alert("색상 이름은 영문, 한글, 숫자로만 입력해주세요.");
      value = "";
    }

    // 입력 값 binding
    setCrDtl({ ...crDtl, [name]: value, pdColorDupChk: false });
  };

  const dupchk = async () => {
    loader(0);
    debugger;
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
          if (rst !== 500) {
            setCrDtl((prevCrDtl) => {
              let updateCrDtl = { ...prevCrDtl };

              if (rst === 501) {
                updateCrDtl.pdColorCode = "";
              } else if (rst === 502) {
                updateCrDtl.pdColorName = "";
              } else if (rst === 200) {
                updateCrDtl.pdColorDupChk = true;
              }

              return updateCrDtl;
            });
          }
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
    let crName = crDtl.pdColorName; // 색상 이름
    let crCode = crDtl.pdColorCode; // 색상 코드
    let crDupChk = crDtl.pdColorDupChk; // 중복 체크 여부
    let valid = 0;
    let msg = "";

    if (!crName) {
      msg = "색상 이름을 입력해주세요.";
    } else if (!crName.match(/[A-a][가-힣][0-9]/)) {
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
    let url = "/rest/pd/cr/create";

    await axios
      .post(url, JSON.stringify(crDtl), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.resultCode === 200) {
          alert(res.data.resultMessage);
          navigate("/admin/product/color/list");
        } else {
          alert(res.data.resultMessage);
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
        alert();
      });
  };

  return (
    <form noValidate validated={validated} onSubmit={handleSubmit}>
      <Box className="box-form">
        <Grid2 container>
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
                      onChange={handleChng}
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
          <Grid2 size={10.2}>
            <FormControl fullWidth>
              <TextField
                name="pdColorName"
                label="Color Name"
                variant="standard"
                helperText="색상 이름을 입력해주세요."
                className="mt-4"
                value={crDtl.pdColorName}
                onChange={handleChng}
                required
              />
            </FormControl>
          </Grid2>
          <Grid2 size={0.8} className="row-side-btn-box">
            <Button
              variant="outlined"
              startIcon={<CheckCircleOutline />}
              size="small"
              disabled={!crDtl.pdColorCode || !crDtl.pdColorName}
              onClick={dupchk}
            >
              중복확인
            </Button>
          </Grid2>
        </Grid2>
      </Box>

      <Divider />
      <Box className="box-button-bottom">
        <Button type="button" variant="contained" onClick={handleSubmit}>
          Regist
        </Button>
      </Box>
    </form>
  );
};

export default ColorForm;
