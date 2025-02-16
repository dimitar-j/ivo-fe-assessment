export interface ContractNode {
  title?: string;
  type?: string;
  children?: ContractNode[];
  text?: string;
  bold?: boolean;
  underline?: boolean;
  italicized?: boolean;
  color?: string;
  id?: string;
  value?: string;
  variableType?: string;
}

export type ContractType = ContractNode[];
