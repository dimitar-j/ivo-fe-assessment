import { ContractNode } from "../types";
import { getContractElement } from "../utils";

export interface ContractSectionProps {
  section: ContractNode;
  bold: boolean;
  underline: boolean;
  italicized: boolean;
  children?: React.ReactNode;
  mentionId?: string;
}

function ContractSection({
  section,
  bold,
  underline,
  italicized,
}: ContractSectionProps) {
  const ContractElement = getContractElement(section.type);
  return (
    <ContractElement
      section={section}
      bold={(bold || section.bold) ?? false}
      underline={(underline || section.underline) ?? false}
      italicized={(italicized || section.italicized) ?? false}
    />
  );
}

export default ContractSection;
