import React from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const Actors = () => {
  const { id } = useParams();

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Actor Details
      </Typography>
      {/* Add actor details content here */}
    </Box>
  );
};

export default Actors; 