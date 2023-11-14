import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

type Props = {
    title: String,
    subtitle?: String,
  }
  
const HeaderSection = (props: Props) => {
  return (
    <Stack >
      <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
        <Typography level="h2">{props.title}</Typography>
      </Stack>
      {props.subtitle &&
        <Typography level="body-md" color="neutral">
          {props.subtitle}
        </Typography>
      }
    </Stack>
  );
}
export default HeaderSection
