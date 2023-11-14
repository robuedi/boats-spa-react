import * as React from 'react';
import Stack from '@mui/joy/Stack';
import HeaderSection from "./HeaderSection"
import { ReactNode } from 'react'

type Props = {
    title: String,
    subtitle?: String,
    content?: ReactNode
}
  
const HeaderStack = (props: Props) => {
  return (
    <Stack
        sx={{
            backgroundColor: 'background.surface',
            px: { xs: 2, md: 4 },
            py: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
        }}
        >
        <HeaderSection title={props.title} subtitle={props.subtitle} />
        {props.content}
    </Stack>
  );
}
export default HeaderStack