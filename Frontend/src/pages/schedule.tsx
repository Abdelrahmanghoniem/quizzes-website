import Sidebar from '../components/Sidebar';
import { Box } from '@mui/material';

const Schedule = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex={1} p={3}>
        <h1>Welcome to the Schedule</h1>
        {/* Add your announcements and What's Due section here */}
      </Box>
    </Box>
  );
};

export default Schedule;
