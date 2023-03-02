import {PillProps, PillVariant} from "./Pill.props";
import {Box, SxProps, Theme, Typography} from "@mui/material";
import theme from "@/utils/theme";
import {PropsWithChildren, useMemo} from "react";

const pillVariantMap: Record<PillVariant, SxProps<Theme>> = {
  dark: {
    backgroundColor: "neutral.darkGray",
    color: "neutral.white"
  },
  error: {
    backgroundColor: "neutral.red",
    color: "neutral.white"
  },
  success: {
    color: "primary.700",
    backgroundColor: "primary.100"
  },
  filter: {
    backgroundColor: "neutral.white",
    color: "tertiary.600",
    border: theme.spacing(1),
    borderColor: "tertiary.600",
    borderStyle: "solid"
  },
  filterActive: {
    backgroundColor: "tertiary.600",
    color: "neutral.white",
    alignItems: "center",
    justifyContent: "center",
    display: "inline-flex",
    flexDirection: "row",
    gap: theme.spacing(8)
  }
}

const Pill = (props: PropsWithChildren<PillProps>) => {
  const {
    variant,
    label,
    onClick,
    children,
    endIcon,
    sx = {},
  } = props;

  const boxPadding = useMemo(() =>
      variant === 'filter' ?
        theme.spacing(5, 10, 4) :
        theme.spacing(6, 10, 5),
    [variant]
  );

  return (
    <>
      <Box sx={{
        transition: "background-color 100ms ease",
        display: "inline-block",
        padding: boxPadding,
        minWidth: theme.spacing(101),
        textAlign: "center",
        borderRadius: theme.spacing(10),
        fontSize: 0,
        ...pillVariantMap[variant],
        ...sx
      }}
           onClick={onClick}
      >
        <Typography component="span"
                    textTransform="uppercase"
                    variant="body1"
                    sx={{
                      fontSize: theme.spacing(14),
                      fontWeight: "bold",
                      lineHeight: theme.spacing(19)
                    }}>{label}</Typography>
        {children}
        {endIcon}
      </Box>
    </>
  );
}

export default Pill;
