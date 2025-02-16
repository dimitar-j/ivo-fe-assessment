import styled from "styled-components";
import { ContractSectionProps } from "../ContractSection";
import { renderChildren } from "../../utils";

const Mention = styled.span<{ $bgColor?: string }>`
  color: white;
  background-color: ${(props) => props.$bgColor || "lightgray"};
  border-radius: 4px;
  padding: 2px 4px;
  width: fit-content;
`;

function ContractMention({
  section,
  underline,
  bold,
  italicized,
}: ContractSectionProps) {
  return (
    <Mention $bgColor={section.color}>
      {renderChildren({
        section,
        bold,
        underline,
        italicized,
        mentionId: section.id,
      })}
    </Mention>
  );
}

export default ContractMention;
