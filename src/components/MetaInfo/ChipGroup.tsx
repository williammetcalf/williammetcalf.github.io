import { Box, Chip } from "@mui/material";
import { FC } from "react";

export interface ChipGroupProps {
  items: string[];
}

const ChipGroup: FC<ChipGroupProps> = (props) => {
  const { items } = props;

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" sx={{ gap: 1 }}>
      {items.map((item, idx) => (
        <Chip key={idx} label={item} color="secondary" size="small" />
      ))}
    </Box>
  );
};

export default ChipGroup;
