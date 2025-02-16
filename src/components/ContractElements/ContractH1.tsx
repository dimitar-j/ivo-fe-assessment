import styled from "styled-components";
import { ContractSectionProps } from "../ContractSection";
import { renderChildren } from "../../utils";

const H1 = styled.h1``;

function ContractH1({
  section,
  underline,
  bold,
  italicized,
}: ContractSectionProps) {
  return (
    <H1>
      {renderChildren({
        section,
        bold,
        underline,
        italicized,
        mentionId: section.id,
      })}
    </H1>
  );
}

export default ContractH1;
