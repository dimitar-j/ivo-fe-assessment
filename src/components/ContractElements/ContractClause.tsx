import styled from "styled-components";
import { ContractSectionProps } from "../ContractSection";
import { renderChildren } from "../../utils";

const Clause = styled.div`
  margin: 0.5rem 0;
`;

function ContractClause({
  section,
  underline,
  bold,
  italicized,
}: ContractSectionProps) {
  return (
    <Clause>
      {renderChildren({
        section,
        bold,
        underline,
        italicized,
        mentionId: section.id,
      })}
    </Clause>
  );
}

export default ContractClause;
