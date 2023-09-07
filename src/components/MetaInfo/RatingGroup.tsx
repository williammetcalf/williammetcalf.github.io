import { Stack } from "@mui/material";
import { FC } from "react";
import RatingItem, { RatingItemProps } from "./RatingItem";

export interface RatingGroupProps {
  items: RatingItemProps[];
}

const RatingGroup: FC<RatingGroupProps> = (props) => {
  const { items } = props;

  return (
    <Stack spacing={1}>
      {items.map((item, idx) => (
        <RatingItem key={idx} {...item} />
      ))}
    </Stack>
  );
};

export default RatingGroup;
