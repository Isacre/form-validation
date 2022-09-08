import React from "react";
import { Button } from "./styles";
import { motion } from "framer-motion";

interface Props {
  formLength: number;
  currentFormStep: number;
  submitFunction: () => any;
  setFormStage: React.Dispatch<React.SetStateAction<number>>;
}

export default function MultipleStepsFormButton(props: Props) {
  const { currentFormStep, formLength, submitFunction, setFormStage } = props;
  const ButtonText = currentFormStep === formLength ? "Submit" : "Next";

  function buttonAction(form: { length: number; currentStep: number }) {
    if (form.currentStep === form.length) {
      setFormStage(0);
      submitFunction();
    } else {
      setFormStage((value) => value + 1);
    }
  }

  return (
    <Button
      as={motion.button}
      whileTap={{ scale: 0.9, filter: "brightness(90%)" }}
      onClick={() => buttonAction({ length: formLength, currentStep: currentFormStep })}
    >
      {ButtonText}
    </Button>
  );
}
