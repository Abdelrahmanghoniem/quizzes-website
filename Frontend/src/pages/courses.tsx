import Sidebar from '../components/Sidebar';
import { Box, Typography } from '@mui/material';

const Courses = () => {
  return (
    
    <Box display={'flex'} sx={{p:10}}>
    <Sidebar />
    <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 3,
              bgcolor: "lightblue",
              borderRadius: 2,
              width: "100%", // Ensure it takes up full width
              height: "100%", // Ensure full screen height for vertical centering          
              margin: "0 auto", // Center the box horizontally

              
            }}
          >          <Typography sx={{fontSize:25,p:1}}>Welcome to the Courses</Typography>
</Box>
  </Box>
  );
};

export default Courses;
