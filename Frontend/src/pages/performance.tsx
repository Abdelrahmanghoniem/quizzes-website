import Sidebar from '../components/Sidebar';
import { Box } from '@mui/material';

const Performance = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex={1} p={3}>
        <h1>Welcome to the Performance</h1>
        {/* Add your announcements and What's Due section here */}
      </Box>
    </Box>
  );
};

export default Performance;
