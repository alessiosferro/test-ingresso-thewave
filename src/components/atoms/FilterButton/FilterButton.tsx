import {useFormContext, useWatch} from "react-hook-form";
import {FilterButtonProps} from "./FilterButton.props";
import Pill from "../Pill/Pill";
import {Input} from "@mui/material";
import SvgTimesIcon from "../Svg/SvgTimesIcon";
import {useCallback, useMemo} from "react";

const FilterButton = (props: FilterButtonProps) => {
  const { controlName, label } = props;

  const { register, setValue } = useFormContext();
  const value = useWatch({ name: controlName });

  const variant = useMemo(() =>
    value ? 'filterActive' : 'filter'
  , [value]);

  const clickHandler = useCallback(() => {
    setValue(controlName, !value);
  }, [controlName, value])

  return (
    <Pill variant={variant}
          label={label}
          endIcon={value ? <SvgTimesIcon /> : null}
          onClick={clickHandler}>
      <Input
        sx={{display: "none"}}
        id={controlName}
        type="button"
        {...register(controlName)}
      />
    </Pill>
  )
}

export default FilterButton;
