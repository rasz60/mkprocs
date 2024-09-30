import Container from "react-bootstrap/Container";
import Header from "./sections/Header";
import Card from "react-bootstrap/Card";

const Main = (props) => {
  return (
    <Container>
      <main id="main" role="main">
        <Header />
        <Card id="content">{props.children}</Card>
      </main>
    </Container>
  );
};

export default Main;
