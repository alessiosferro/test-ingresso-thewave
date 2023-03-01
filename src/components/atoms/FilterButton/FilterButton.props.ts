import {PillProps} from "../Pill/Pill.props";

export interface FilterButtonProps extends Omit<PillProps, 'variant'> {
    controlName: string;
  }
