import { Box, Chip, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

export interface WorkProjectItemProps {
  name: ReactNode;
  description: string;
  tags?: string[];
  bulletPoints?: string[];
}

const WorkProjectItem: FC<WorkProjectItemProps> = (props) => {
  const { name, description, bulletPoints, tags } = props;

  return (
    <Stack>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="body2" fontWeight="bold" component="div">
          <i>{name}</i>
        </Typography>
        {tags && (
          <Box display="flex" sx={{ marginLeft: 1, gap: 0.5 }}>
            {tags.map((tag, idx) => (
              <Chip
                key={idx}
                label={tag}
                variant="outlined"
                size="small"
                color="secondary"
              />
            ))}
          </Box>
        )}
      </Box>
      <Typography variant="body2">{description}</Typography>
      {bulletPoints && (
        <Typography variant="caption">
          <ul>
            {bulletPoints.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Typography>
      )}
    </Stack>
  );
};

export default WorkProjectItem;
