import React, { useState } from 'react';
import { Box, Typography, IconButton, Paper, Fade } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import type { Show } from '../data/shows';

interface MovieRowProps {
  title: string;
  movies: Show[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const [scrollX, setScrollX] = useState(0);
  const [hoveredMovie, setHoveredMovie] = useState<Show | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const rowWidth = 240;

  const handleScroll = (direction: 'left' | 'right') => {
    const scrollAmount = direction === 'left' ? -rowWidth * 2 : rowWidth * 2;
    const list = document.getElementById(`movie-row-${title}`);
    if (list) {
      const newScrollX = scrollX + scrollAmount;
      const maxScroll = -(movies.length * rowWidth - window.innerWidth);
      setScrollX(Math.max(Math.min(newScrollX, 0), maxScroll));
      list.style.transform = `translateX(${Math.max(Math.min(newScrollX, 0), maxScroll)}px)`;
    }
  };

  const handleMouseEnter = (movie: Show) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    const timeout = setTimeout(() => {
      setHoveredMovie(movie);
    }, 500); // Delay to prevent flickering
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    const timeout = setTimeout(() => {
      setHoveredMovie(null);
    }, 300);
    setHoverTimeout(timeout);
  };

  return (
    <Box sx={{ mb: 3, overflow: 'hidden', position: 'relative' }}>
      <Typography
        variant="h5"
        sx={{
          color: 'white',
          mb: 2,
          pl: 4,
          fontWeight: 'bold'
        }}
      >
        {title}
      </Typography>

      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={() => handleScroll('left')}
          sx={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.7)'
            }
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>

        <Box
          id={`movie-row-${title}`}
          sx={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            pl: 4,
          }}
        >
          {movies.map((movie) => (
            <Box
              key={movie.id}
              onMouseEnter={() => handleMouseEnter(movie)}
              onMouseLeave={handleMouseLeave}
              sx={{
                minWidth: 200,
                height: 300,
                mr: 1,
                borderRadius: 1,
                overflow: 'visible',
                position: 'relative',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)',
                  zIndex: 5,
                }
              }}
            >
              <img
                src={movie.posterPath}
                alt={movie.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px',
                }}
              />
              
              <Fade in={hoveredMovie?.id === movie.id}>
                <Paper
                  sx={{
                    position: 'absolute',
                    bottom: -60,
                    left: 0,
                    right: 0,
                    bgcolor: '#181818',
                    color: 'white',
                    p: 1.5,
                    borderRadius: '0 0 4px 4px',
                    boxShadow: 3,
                    zIndex: 6,
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 0.5, mb: 0.5 }}>
                    <IconButton
                      size="small"
                      sx={{
                        bgcolor: 'white',
                        color: 'black',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.75)' }
                      }}
                    >
                      <PlayArrowIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ 
                        bgcolor: 'rgba(42,42,42,0.6)', 
                        border: '2px solid #666',
                        color: 'white',
                        '&:hover': { bgcolor: 'rgba(42,42,42,0.8)' }
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ 
                        bgcolor: 'rgba(42,42,42,0.6)', 
                        border: '2px solid #666',
                        color: 'white',
                        '&:hover': { bgcolor: 'rgba(42,42,42,0.8)' }
                      }}
                    >
                      <ThumbUpOutlinedIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ 
                        ml: 'auto',
                        bgcolor: 'rgba(42,42,42,0.6)', 
                        border: '2px solid #666',
                        color: 'white',
                        '&:hover': { bgcolor: 'rgba(42,42,42,0.8)' }
                      }}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="caption" component="div" sx={{ color: '#46d369' }}>
                    98% Match
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 0.5 }}>
                    {movie.type.toUpperCase()} • {movie.genre}
                  </Typography>
                </Paper>
              </Fade>
            </Box>
          ))}
        </Box>

        <IconButton
          onClick={() => handleScroll('right')}
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.7)'
            }
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MovieRow; 