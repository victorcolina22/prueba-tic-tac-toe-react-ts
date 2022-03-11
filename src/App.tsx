import { useState } from "react";

import { makeStyles } from "@mui/styles";
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";

import { Cell } from './components/Cell';
import { theme } from "./helpers/challengeTheme";
import { CustomButton } from "./ui/CustomButton";


const useStyles = makeStyles({
  container: {
    width: '90%',
    margin: '50px auto',
    textAlign: 'center'
  },
  title: {
    color: theme.status.secondary
  },
  board: {
    maxWidth: '450px',
    margin: '25px auto',
    display: 'flex',
    flexWrap: 'wrap',
  },
  cell: {
    width: '150px',
    height: '150px',
    border: `2px solid ${theme.status.secondary}`,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(false);

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography
        variant="h3"
        component="div"
        className={classes.title}>
        Tic Tac Toe with Typescript
      </Typography>
      <Box mt={2}>
        <ThemeProvider theme={theme}>
          <CustomButton
            variant="outlined"
            size="medium">
            Reset
          </CustomButton>
        </ThemeProvider>
      </Box>
      <div className={classes.board}>
        {
          board.map((value, index) => (
            <Cell
              key={index}
              value={value}
              classes={classes}
            />
          ))
        }
      </div>
    </Container>
  );
};

export default App;
