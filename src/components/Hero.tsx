import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { featuredShow } from '../data/shows';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        height: '95vh',
        width: '100%',
        position: 'relative',
        backgroundImage: `url(${featuredShow.posterPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: '40%',
          bottom: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
          zIndex: 1
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '7.5rem',
          background: 'linear-gradient(180deg, transparent, rgba(20,20,20,0.8), #141414)',
          zIndex: 1
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pl: { xs: 4, md: 6 },
          maxWidth: { xs: '100%', md: '50%' },
          pt: 8
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '3rem', md: '4rem' },
            fontWeight: 'bold',
            mb: 2,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.45)',
            lineHeight: 1.1
          }}
        >
          {featuredShow.title}
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            mb: 4,
            color: 'white',
            textShadow: '1px 1px 2px rgba(0,0,0,0.45)',
            maxWidth: '700px'
          }}
        >
          {featuredShow.description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayArrowIcon />}
            sx={{
              bgcolor: 'white',
              color: 'black',
              px: 4,
              py: 1,
              fontSize: '1.2rem',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.75)'
              }
            }}
          >
            Play
          </Button>
          
          <Button
            variant="contained"
            size="large"
            startIcon={<InfoOutlinedIcon />}
            sx={{
              bgcolor: 'rgba(109, 109, 110, 0.7)',
              color: 'white',
              px: 4,
              py: 1,
              fontSize: '1.2rem',
              '&:hover': {
                bgcolor: 'rgba(109, 109, 110, 0.4)'
              }
            }}
          >
            More Info
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: '#46d369',
            mt: 4,
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          98% Match
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero; 