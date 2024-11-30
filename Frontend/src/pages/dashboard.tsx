import  { useEffect, useState } from 'react';
import { Box, Typography, Grid2, Fab,  } from '@mui/material';

import { Quizitem } from '../types/quiztypes';
import Sidebar from '../components/Sidebar';
import QuizCard from '../components/QuizCard';
import { BASE_URL } from '../constants/BaseUrl';
import CreateQuizModal from '../components/CreateQuizModal';


const Dashboard = () => {
  const [quizzes, setQuizzes] = useState<Quizitem[]>([]);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);



  
  

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
        <Box sx={{ p:10 }}>
          {/* Header Section */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 3,
              bgcolor: "lightblue",
              borderRadius: 2,
              
              margin: "0 auto", // Center the box horizontally

              
            }}
          >          <Typography sx={{fontSize:25,p:1}}>Welcome to the Dashboard</Typography>
</Box>
          {/* Quiz Cards */}
          <Box>
          <Grid2  display={'flex'} container spacing={20} sx={{ mt: 3 }}>
            {quizzes.map((quiz) => (
              <Grid2 alignContent={'center'} display={'flex'} container size={{ xs: 12, sm: 6, md: 3 }} key={quiz._id}>
                <QuizCard {...quiz} />
              </Grid2>
            ))}
          </Grid2>
          </Box>

        {/* Floating Button */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpenModal}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "primary.main",
        }}
      >
          +
      </Fab>

      {/* Create Quiz Modal */}
      {isModalOpen && <CreateQuizModal onClose={handleCloseModal} />}
    </Box>
    </Box>
  );
}


export default Dashboard;