import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";


export const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.status.color,
    borderColor: theme.status.color
}));