export interface MainHeaderNavVarData {
  label: string;
  to: string;
}

export interface MainHeaderNavVarProps {
  data?: MainHeaderNavVarData[];
  renderItem?: Function
}
