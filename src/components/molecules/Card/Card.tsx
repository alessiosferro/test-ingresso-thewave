import {CardProps} from "./Card.props";
import {Box, Typography} from "@mui/material";
import theme from "@/utils/theme";
import Pill from "@/atoms/Pill/Pill";

const Card = (props: CardProps) => {
  const {
    description,
    statusVariant,
    statusLabel,
    imageAlt,
    title,
    subtitle,
    imageUrl
  } = props;

  return (
    <Box bgcolor="neutral.white"
         overflow="hidden"
         boxShadow={theme.boxShadows.dp4}
         borderRadius={theme.spacing(16)}
         minHeight={theme.spacing(530)}>
      <img alt={imageAlt} src={imageUrl} width="100%" height="330" style={{objectFit: 'cover'}} />
      <Box padding={theme.spacing(27, 25, 48)}>
        <Typography color="tertiary.600" variant="h2">{title}</Typography>
        <Typography color="tertiary.400" component="p" variant="subtitle1">{subtitle}</Typography>
        <Pill label={statusLabel} variant={statusVariant} sx={{my: theme.spacing(21)}} />
        <Typography component="p" variant="body1">{description}</Typography>
      </Box>
    </Box>
  )
}

export default Card;
