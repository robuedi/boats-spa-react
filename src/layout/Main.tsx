import { ReactNode } from 'react'
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import NavBar from "./NavBar"
import Box from '@mui/joy/Box';

type Props = {
  content: ReactNode
}

const Main = (props: Props) => {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <NavBar />
            <Box
                component="main"
                sx={{
                height: 'calc(100vh - 55px)', // 55px is the height of the NavBar
                width: '100'
                }}
            >
                {props.content}
            </Box>
        </CssVarsProvider>
    )
}
export default Main