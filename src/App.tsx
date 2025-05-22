import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import { shows } from './data/shows';

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#141414',
      paper: '#141414',
    },
    primary: {
      main: '#E50914',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

// Filter shows by genre
const getShowsByGenre = (genre: string) => shows.filter(show => show.genre === genre);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ minHeight: '100vh', backgroundColor: '#141414' }}>
        <Navbar />
        <Hero />
        <div style={{ marginTop: '-150px', position: 'relative', zIndex: 2 }}>
          <MovieRow title="Trending Now" movies={shows} />
          <MovieRow title="Crime Shows" movies={getShowsByGenre('crime')} />
          <MovieRow title="Sci-Fi Shows" movies={getShowsByGenre('sci-fi')} />
          <MovieRow title="Drama Series" movies={getShowsByGenre('drama')} />
          <MovieRow title="Fantasy" movies={getShowsByGenre('fantasy')} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
