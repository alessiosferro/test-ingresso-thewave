import {PillProps, PillVariant} from "./Pill.props";
import {Box, SxProps, Theme, Typography} from "@mui/material";
import theme from "@/utils/theme";

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
  }
}

const Pill = (props: PillProps) => {
  const {
    variant,
    label
  } = props;

  return (
    <Box sx={{ ...pillVariantMap[variant],
      display: "inline-block",
      padding: theme.spacing(6, 10, 5),
      minWidth: theme.spacing(101),
      textAlign: "center",
      borderRadius: theme.spacing(10) }}
    >
      <Typography textTransform="uppercase" variant="body1" sx={{
        fontSize: theme.spacing(14),
        fontWeight: "bold",
        lineHeight: theme.spacing(19)
      }}>{label}</Typography>
    </Box>
  );
}

export default Pill;
