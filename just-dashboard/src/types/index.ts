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

type DashboardStats = {
  title: string;
  value: number;
  growth_percent: number;
};

type DashboardBarChartData = {
  month: string;
  projection: number;
  actual: number;
};

type DashboardPieChartData = Record<string, number>;

type DashboardMapChartData = Record<string, number>;

type DashboardTableData = {
  name: string;
  price: number;
  quantity: number;
  amount: number;
};

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}
