import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  background-color: var(--color-button-purple);
  color: rgb(229, 215, 239);
  width: 150px;
  height: 60px;
  font-size: 1rem;
  border-radius: 35px;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  filter: drop-shadow(5px 8px 5px #0000004c);
`;
