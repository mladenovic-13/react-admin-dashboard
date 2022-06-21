export interface WidgetProps {
  type: string;
  value: string;
  linkTitle: string;
  icon: React.ReactNode;
  stats: {
    value: number;
    positive: boolean;
  };
}
