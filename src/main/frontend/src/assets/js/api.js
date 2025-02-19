import { useContext, useState } from "react";
import { ctx } from "../../App.js";
import axios from "axios";

const api = () => {
  const categoryList = async (lv, pid) => {
    const { loader } = useContext(ctx);
    // categoryLevel1, categoryLevel2, categoryLevel3 (대/중/소분류 select-box)
    const [ctLv1Dtl, setCtLv1Dtl] = useState([]);
    const [ctLv2Dtl, setCtLv2Dtl] = useState([]);
    const [ctLv3Dtl, setCtLv3Dtl] = useState([]);

    loader(0);
    let url = "/rest/pd/ct/list/" + lv + (pid ? "/" + pid : "");
    await axios
      .get(url)
      .then((res) => {
        if (lv === 1) {
          // 대분류
          setCtLv1Dtl(res.data.result.pdCtList);
        } else if (lv === 2) {
          // 중분류
          setCtLv2Dtl(res.data.result.pdCtList);
        } else if (lv === 3) {
          // 소분류
          setCtLv3Dtl(res.data.result.pdCtList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    loader(-1);

    return [ctLv1Dtl, ctLv2Dtl, ctLv3Dtl];
  };

  return;
};

export default api;
