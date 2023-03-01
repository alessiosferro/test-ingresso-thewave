import {useFormContext, useWatch} from "react-hook-form";
import {FilterButtonProps} from "./FilterButton.props";
import Pill from "../Pill/Pill";
import {Input} from "@mui/material";
import TimesIcon from "../Icons/TimesIcon";
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
          endIcon={value ? <TimesIcon /> : null}
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
