import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            color: string;
        };
    }
    interface ThemeOptions {
        status?: {
            color?: string;
        };
    }
}

export const theme = createTheme({
    status: {
        color: 'burlywood',
    },
});