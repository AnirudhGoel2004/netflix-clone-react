#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download images
# Breaking Bad hero banner (high quality landscape)
curl -o public/images/breaking-bad-hero.jpg "https://images2.alphacoders.com/405/405322.jpg"

# Show posters (high quality vertical posters)
curl -o public/images/breaking-bad.jpg "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
curl -o public/images/better-call-saul.jpg "https://image.tmdb.org/t/p/original/fC2HDm5t0kHl7mTm7jxMR31b6Qy.jpg"
curl -o public/images/stranger-things.jpg "https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
curl -o public/images/the-crown.jpg "https://image.tmdb.org/t/p/original/1s1oqD8rMKvQGqxqRf3TGhm5an8.jpg"
curl -o public/images/ozark.jpg "https://image.tmdb.org/t/p/original/pCGyPVrI9Fk2b8JqZPw8PVqHWfi.jpg"
curl -o public/images/the-witcher.jpg "https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"
curl -o public/images/black-mirror.jpg "https://image.tmdb.org/t/p/original/7PRddO7z7mcPi21nZTCMGShAyy1.jpg"
curl -o public/images/money-heist.jpg "https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
curl -o public/images/dark.jpg "https://image.tmdb.org/t/p/original/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg"

# Netflix logo
curl -o public/netflix-logo.png "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"

# Make the script executable
chmod +x download-images.sh 