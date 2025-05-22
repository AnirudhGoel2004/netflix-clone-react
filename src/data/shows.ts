export interface Show {
  id: number;
  title: string;
  description: string;
  posterPath: string;
  type: 'tv' | 'movie';
  genre: string;
}

export const featuredShow: Show = {
  id: 1,
  title: "Breaking Bad",
  description: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's financial future while battling terminal lung cancer.",
  posterPath: "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  type: 'tv',
  genre: 'drama'
};

export const shows: Show[] = [
  {
    id: 2,
    title: "Better Call Saul",
    posterPath: "https://image.tmdb.org/t/p/original/fC2HDm5t0kHl7mTm7jxMR31b6Qy.jpg",
    description: "The trials and tribulations of criminal lawyer Jimmy McGill before his transformation into Saul Goodman.",
    type: 'tv',
    genre: 'drama'
  },
  {
    id: 3,
    title: "Stranger Things",
    posterPath: "https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces to get him back.",
    type: 'tv',
    genre: 'sci-fi'
  },
  {
    id: 4,
    title: "The Crown",
    posterPath: "https://image.tmdb.org/t/p/original/1s1oqD8rMKvQGqxqRf3TGhm5an8.jpg",
    description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    type: 'tv',
    genre: 'drama'
  },
  {
    id: 5,
    title: "Ozark",
    posterPath: "https://image.tmdb.org/t/p/original/pCGyPVrI9Fk2b8JqZPw8PVqHWfi.jpg",
    description: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    type: 'tv',
    genre: 'crime'
  },
  {
    id: 6,
    title: "The Witcher",
    posterPath: "https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    type: 'tv',
    genre: 'fantasy'
  },
  {
    id: 7,
    title: "Black Mirror",
    posterPath: "https://image.tmdb.org/t/p/original/7PRddO7z7mcPi21nZTCMGShAyy1.jpg",
    description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    type: 'tv',
    genre: 'sci-fi'
  },
  {
    id: 8,
    title: "Money Heist",
    posterPath: "https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    type: 'tv',
    genre: 'crime'
  },
  {
    id: 9,
    title: "Dark",
    posterPath: "https://image.tmdb.org/t/p/original/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg",
    description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
    type: 'tv',
    genre: 'sci-fi'
  }
]; 