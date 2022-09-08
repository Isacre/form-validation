import React from "react";
import { InputWrapper } from "./styles";

interface Props {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input(props: Props) {
  const { placeholder, value, setValue } = props;
  return <InputWrapper placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />;
}
