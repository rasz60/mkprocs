import { useState } from "react";

import Main from "../../Main";
import Card from "react-bootstrap/Card";
import { GoPlus } from "react-icons/go";
import { GiTargeting } from "react-icons/gi";

const ProcessForm = () => {
  const [details, setDetails] = useState(false);
  const showDetails = () => {
    if (create) setCreate(false);
    setDetails(!details);
  };
  const [create, setCreate] = useState(false);
  const showCreate = () => {
    if (details) setDetails(false);
    setCreate(!create);
  };

  return (
    <Main>
      <Card id="diagram">
        <Card className="steps">
          <GiTargeting size={100} onClick={showDetails} />
        </Card>

        <Card className="steps new">
          <GoPlus size={100} onClick={showCreate} />
        </Card>
      </Card>

      <Card id="stepState" className={details || create ? "d-show" : "d-none"}>
        <Card.Title>{details ? "details" : create ? "create" : ""}</Card.Title>
      </Card>
    </Main>
  );
};

export default ProcessForm;
