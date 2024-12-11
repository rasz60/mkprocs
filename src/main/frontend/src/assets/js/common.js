import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

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

export { handleChng, ListItem };
