type MenuItem = {
  label: string;
  subLabels?: MenuItem[];
  icon?: React.JSX.Element | (() => React.JSX.Element);
};
