import { ReactNode } from 'react'
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import NavBar from "./NavBar"

type Props = {
  content: ReactNode
}

const Main = (props: Props) => {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <NavBar />
            test
            {props.content}
        </CssVarsProvider>
    )
}
export default Main