import { ContractSection } from "./components";
import ContractBlock from "./components/ContractElements/ContractBlock";
import ContractClause from "./components/ContractElements/ContractClause";
import ContractH1 from "./components/ContractElements/ContractH1";
import ContractH4 from "./components/ContractElements/ContractH4";
import ContractLI from "./components/ContractElements/ContractLI";
import ContractLIC from "./components/ContractElements/ContractLIC";
import ContractMention from "./components/ContractElements/ContractMention";
import ContractP from "./components/ContractElements/ContractP";
import ContractText from "./components/ContractElements/ContractText";
import ContractUL from "./components/ContractElements/ContractUL";
import { ContractNode } from "./types";

interface RenderChildrenArgs {
  section: ContractNode;
  bold: boolean;
  underline: boolean;
  italicized: boolean;
  mentionId?: string;
}

export function renderChildren({
  section,
  bold,
  underline,
  italicized,
  mentionId,
}: RenderChildrenArgs) {
  if (!section.children) {
    return null;
  }
  return section.children?.map((child, index) => (
    <ContractSection
      key={index}
      section={child}
      bold={(bold || section.bold) ?? false}
      underline={(underline || section.underline) ?? false}
      italicized={(italicized || section.italicized) ?? false}
      mentionId={mentionId}
    />
  ));
}

export function getContractElement(type: string | undefined) {
  switch (type) {
    case "block":
      return ContractBlock;
    case "h1":
      return ContractH1;
    case "p":
      return ContractP;
    case "mention":
      return ContractMention;
    case "clause":
      return ContractClause;
    case "h4":
      return ContractH4;
    case "ul":
      return ContractUL;
    case "li":
      return ContractLI;
    case "lic":
      return ContractLIC;
    default:
      return ContractText;
  }
}

export function getMentionData(mentionId: string, tempTextData: string) {
  // Unsure how to differentiate between text data and mention data as both
  // values exists in input.json -> for now, just return the associated text
  // data but could pull from a MentionContext if we are disregarding the "type": "text" child
  return tempTextData;
}
