import styled from "styled-components";
import { ContractSectionProps } from "../ContractSection";
import { renderChildren } from "../../utils";

const LIC = styled.li``;

function ContractLIC({
  section,
  underline,
  bold,
  italicized,
}: ContractSectionProps) {
  return (
    <LIC>
      {renderChildren({
        section,
        bold,
        underline,
        italicized,
        mentionId: section.id,
      })}
    </LIC>
  );
}

export default ContractLIC;
