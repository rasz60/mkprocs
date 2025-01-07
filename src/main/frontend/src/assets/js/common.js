import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import ReactDOM from "react-dom/client";
import Loading from "../../components/modals/loading";

let loaderRoot;

const handleChng = (event, mthd, obj) => {
  const { name, value } = event.target;
  mthd({
    ...obj,
    [name]: value,
  });

  return obj;
};

const ListItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const loader = (type) => {
  if (type === 0) {
    let box = document.createElement("div");
    box.id = "loader-container";
    document.body.appendChild(box);

    loaderRoot = ReactDOM.createRoot(box);
    loaderRoot.render(<Loading />);
  } else {
    loaderRoot.unmount();
    const box = document.getElementById("loader-container");
    if (box) {
      document.body.removeChild(box);
    }
  }
};

export { handleChng, ListItem, loader };
