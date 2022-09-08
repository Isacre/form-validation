import React, { useState } from "react";
import styled from "styled-components";

import MultipleStepsFormButton from "../../components/UI/atoms/MultipleStepsFormButton";

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: inherit;
  background-color: #4158d0;
  background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
`;

export default function FormPage() {
  const [formStage, setFormStage] = useState(1);
  console.log(formStage);

  return (
    <Component>
      <MultipleStepsFormButton formLength={5} currentFormStep={formStage} setFormStage={setFormStage} submitFunction={() => console.log(formStage)} />
    </Component>
  );
}
