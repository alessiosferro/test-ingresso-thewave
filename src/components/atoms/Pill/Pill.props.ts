export type PillVariant = 'success' | 'error' | 'dark' | 'filter' | 'filterActive';

export interface PillProps {
  label: string;
  variant: PillVariant;
  onClick?: () => void;
  endIcon?: JSX.Element | null;
}
