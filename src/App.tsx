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
    color: theme.status.color
  },
  board: {
    maxWidth: '450px',
    margin: '15px auto',
    display: 'flex',
    flexWrap: 'wrap',
  },
  cell: {
    width: '150px',
    height: '150px',
    border: `2px solid ${theme.status.color}`,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  player: {
    fontSize: '3rem',
    color: theme.status.color
  },
  nextPlayerTitle: {
    color: theme.status.color,
    fontSize: '1.5rem',
    marginTop: '15px'
  }
});


const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(false);

  const classes = useStyles();

  let player: string = !turn ? 'X' : 'O';

  const handleCellValue = (idx: number): void => {
    const boardBuffer = [...board];

    if (boardBuffer[idx] !== null) return;

    setTurn(!turn);

    boardBuffer[idx] = player;

    setBoard(boardBuffer);
  };

  const resetGame = (): void => {
    setBoard(Array(9).fill(null));
    setTurn(false);
  };

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
            size="medium"
            onClick={resetGame}>
            Reset
          </CustomButton>
        </ThemeProvider>
      </Box>
      <p className={classes.nextPlayerTitle}>
        Next player: {player}
      </p>
      <div className={classes.board}>
        {
          board.map((value, index) => (
            <Cell
              key={index}
              value={value}
              classes={classes}
              idx={index}
              handleCellvalue={handleCellValue}
            />
          ))
        }
      </div>
    </Container>
  );
};

export default App;
