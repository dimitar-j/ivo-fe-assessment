import styled from "styled-components";
import { ContractSectionProps } from "../ContractSection";
import { renderChildren } from "../../utils";
import ContractText from "./ContractText";

const P = styled.span``;

function ContractP({
  section,
  underline,
  bold,
  italicized,
}: ContractSectionProps) {
  return (
    <P>
      {section.text && (
        <ContractText
          section={section}
          bold={bold}
          italicized={italicized}
          underline={underline}
        />
      )}
      {section.children &&
        renderChildren({
          section,
          bold,
          underline,
          italicized,
          mentionId: section.id,
        })}
    </P>
  );
}

export default ContractP;
