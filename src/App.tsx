import React from 'react';
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";


const useStyles = makeStyles({
  container: {
    width: '90%',
    margin: '50px auto',
    textAlign: 'center'
  },
  title: {
    color: 'burlywood'
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
    border: '2px solid burlywood',
    cursor: 'pointer'
  },
});

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(false);

  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Typography
          variant="h3"
          component="div"
          className={classes.title}>
          Tic Tac Toe with Typescript
        </Typography>
        <Box mt={2}>
          <Button
            variant="outlined"
            size="medium">
            Reset
          </Button>
        </Box>
        <div className={classes.board}>
          {
            board.map((cell, index) => (
              <div
                className={classes.cell}
                key={index}>
                {cell}
              </div>
            ))
          }
        </div>
      </Container>
    </>
  );
};

export default App;
