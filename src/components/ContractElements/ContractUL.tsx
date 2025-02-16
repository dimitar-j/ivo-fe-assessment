import styled from "styled-components";
import { ContractSectionProps } from "../ContractSection";
import { renderChildren } from "../../utils";

const UL = styled.ul``;

function ContractUL({
  section,
  underline,
  bold,
  italicized,
}: ContractSectionProps) {
  return (
    <UL>
      {renderChildren({
        section,
        bold,
        underline,
        italicized,
        mentionId: section.id,
      })}
    </UL>
  );
}

export default ContractUL;
