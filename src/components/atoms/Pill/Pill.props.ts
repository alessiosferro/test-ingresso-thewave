import {BoxProps} from "@mui/material";

export type PillVariant = 'success' | 'error' | 'dark' | 'filter' | 'filterActive';

export interface PillProps extends BoxProps {
  label: string;
  variant: PillVariant;
  onClick?: () => void;
  endIcon?: JSX.Element | null;
}
