import Sidebar from './Sidebar';
import { Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex={1} p={3}>
        <h1>Welcome to the Dashboard</h1>
        {/* Add your announcements and What's Due section here */}
      </Box>
    </Box>
  );
};

export default Dashboard;
