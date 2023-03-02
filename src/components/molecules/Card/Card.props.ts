import {PillVariant} from "../../atoms/Pill/Pill.props";

export interface CardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  statusVariant: PillVariant;
  statusLabel: string;
  description: JSX.Element | string;
}
