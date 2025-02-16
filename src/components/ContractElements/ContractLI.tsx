import styled from "styled-components";
import { ContractSectionProps } from "../ContractSection";
import { renderChildren } from "../../utils";

const LI = styled.li``;

function ContractLI({
  section,
  underline,
  bold,
  italicized,
}: ContractSectionProps) {
  return (
    <LI>
      {renderChildren({
        section,
        bold,
        underline,
        italicized,
        mentionId: section.id,
      })}
    </LI>
  );
}

export default ContractLI;
