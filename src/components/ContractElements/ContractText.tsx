import styled from "styled-components";
import { ContractSectionProps } from "../ContractSection";
import { getMentionData } from "../../utils";

const Text = styled.span<{
  $bold?: boolean;
  $italicized?: boolean;
  $underline?: boolean;
}>`
  font-weight: ${(props) => (props.$bold ? "bold" : "inherit")};
  font-style: ${(props) => (props.$italicized ? "italic" : "inherit")};
  text-decoration: ${(props) => (props.$underline ? "underline" : "none")};
`;

function ContractText({
  section,
  bold,
  italicized,
  underline,
  mentionId,
}: ContractSectionProps) {
  const data = mentionId
    ? getMentionData(mentionId, section.text ?? "")
    : section.text;
  return (
    <>
      <Text $bold={bold} $italicized={italicized} $underline={underline}>
        {data?.split("\n").map((line, index, array) => (
          <span key={index}>
            {line}
            {index !== array.length - 1 && <br />}
          </span>
        ))}
      </Text>
    </>
  );
}

export default ContractText;
