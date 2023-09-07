import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import {
  Rating,
  Stack,
  Typography,
  ratingClasses,
  styled,
} from "@mui/material";
import { FC } from "react";

export interface RatingItemProps {
  label: string;
  rating: number;
}

const RatingItem: FC<RatingItemProps> = (props) => {
  const { label, rating } = props;

  return (
    <Stack>
      <Typography variant="body2">{label}</Typography>
      <StyledRating
        disabled
        icon={<RadioButtonChecked color="primary" />}
        emptyIcon={<RadioButtonUnchecked color="primary" />}
        precision={0.5}
        value={rating}
      />
    </Stack>
  );
};

const StyledRating = styled(Rating)({
  [`&.${ratingClasses.disabled}`]: { opacity: 1 },
});

export default RatingItem;
