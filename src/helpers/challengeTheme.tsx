import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            secondary: string;
        };
    }
    interface ThemeOptions {
        status?: {
            secondary?: string;
        };
    }
}

export const theme = createTheme({
    status: {
        secondary: 'burlywood',
    },
});