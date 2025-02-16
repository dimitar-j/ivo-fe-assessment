import styled from "styled-components";
import { ContractSectionProps } from "../ContractSection";
import { renderChildren } from "../../utils";

const H4 = styled.h4`
  font-weight: normal;
  margin: 0;
`;

function ContractH4({
  section,
  underline,
  bold,
  italicized,
}: ContractSectionProps) {
  return (
    <H4>
      {renderChildren({
        section,
        bold,
        underline,
        italicized,
        mentionId: section.id,
      })}
    </H4>
  );
}

export default ContractH4;
