import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { Box } from "@mui/system";


const useStyles = makeStyles({
  container: {
    width: '90%',
    margin: '50px auto',
    textAlign: 'center'
  },
  h1: {
    color: 'burlywood',
    fontSize: '3rem',
  },
  board: {
    maxWidth: '450px',
    margin: '25px auto',
    display: 'flex',
    flexWrap: 'wrap',
  },
  square: {
    width: '150px',
    height: '150px',
    border: '2px solid burlywood',
    cursor: 'pointer'
  },
});

const App = () => {
  const [boardTable, setBoardTable] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Tic Tac Toe with Typescript</h1>
      <Box mt={2}>
        <Button
          variant="outlined"
          size="medium">
          Reset
        </Button>
      </Box>
      <div className={classes.board}>
        {
          boardTable.map((board, index) => (
            <div
              className={classes.square}
              key={index}>
              {board}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;
