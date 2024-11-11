import { Container, Card } from "@mui/material";
import Header from "./sections/Header";

const Main = (props) => {
  return (
    <Container maxWidth="xxl">
      <main id="main" role="main">
        <Header />
        <Card id="content">{props.children}</Card>
      </main>
    </Container>
  );
};

export default Main;
