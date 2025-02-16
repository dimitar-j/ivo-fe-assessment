import { ContractType } from "../types";
import ContractSection from "./ContractSection";

interface ContractProps {
  data: ContractType;
}

function Contract({ data }: ContractProps) {
  const contractRoot = data[0];
  return (
    <ContractSection
      section={contractRoot}
      bold={contractRoot.bold ?? false}
      italicized={contractRoot.italicized ?? false}
      underline={contractRoot.underline ?? false}
    />
  );
}

export default Contract;
