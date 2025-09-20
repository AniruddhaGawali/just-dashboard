type MenuItem = {
  label: string;
  subLabels?: MenuItem[];
  icon?: React.JSX.Element | (() => React.JSX.Element);
  link?: string;
};

type Order = {
  id: string;
  user: User;
  project: string;
  address: string;
  date: string;
  status: 'In Progress' | 'Complete' | 'Approved' | 'Rejected' | 'Pending';
};

type User = {
  name: string;
  avatarUrl: string;
};
