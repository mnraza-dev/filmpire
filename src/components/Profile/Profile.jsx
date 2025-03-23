import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        My Profile
      </Typography>
      {/* Add profile content here */}
    </Box>
  );
};

export default Profile; 