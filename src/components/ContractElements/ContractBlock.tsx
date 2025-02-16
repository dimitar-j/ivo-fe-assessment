import styled from "styled-components";
import { ContractSectionProps } from "../ContractSection";
import { renderChildren } from "../../utils";

const Block = styled.div`
  margin: 1rem 0;
`;

function ContractBlock({
  section,
  underline,
  bold,
  italicized,
}: ContractSectionProps) {
  return (
    <Block>
      {renderChildren({
        section,
        bold,
        underline,
        italicized,
        mentionId: section.id,
      })}
    </Block>
  );
}

export default ContractBlock;
