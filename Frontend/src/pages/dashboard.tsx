import  { useEffect, useState } from 'react';
import { Box, Typography, Grid2,  } from '@mui/material';

import { Quizitem } from '../types/quiztypes';
import Sidebar from '../components/Sidebar';
import QuizCard from '../components/QuizCard';
import { BASE_URL } from '../constants/BaseUrl';

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState<Quizitem[]>([]);
  const [error, setError] = useState(false);


  
  

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/quizzez`);
        const data = await response.json();
        setQuizzes(data);
      } catch {
        setError(true);
      }
    };

    fetchQuizzes();
  }, []);
  if(error) {
    return <Box>Something went wrong, please try again!</Box>
  }

  

  
  return (
    <Box display="flex">
      <Sidebar />
        <Box sx={{ p: 3 }}>
          {/* Header Section */}
          <Typography variant="h4" gutterBottom>
            Welcome, to coligo!
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 3,
              bgcolor: "lightblue",
              borderRadius: 2,
            }}
          ></Box>
          {/* Quiz Cards */}
          <Box>
          <Grid2 container spacing={3} sx={{ mt: 3 }}>
            {quizzes.map((quiz) => (
              <Grid2 container size={{ xs: 12, sm: 6, md: 4 }} key={quiz._id}>
                <QuizCard {...quiz} />
              </Grid2>
            ))}
          </Grid2>
          </Box>
        </Box>
      
    </Box>
  );
};


export default Dashboard;
