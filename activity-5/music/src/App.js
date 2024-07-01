import React, { useState } from 'react';
import Card from './Card';
import './App.css';

const App = () => {
  const [albumList, setAlbumList] = useState([
       {
      artistId: 0,
      artist: 'Jay-z',
      title: 'what more can I say',
      description: "A defining album in Jay-Z's career, featuring hits like '99 Problems' and 'Dirt off Your Shoulder.",
      year: 2003,
      image:
        'https://upload.wikimedia.org/wikipedia/en/0/04/Jay-Z_-_The_Black_Album.png',
    },
    {
      artistId: 1,
      artist: 'Michael Jackson',
      title: 'Thriller',
      description:"The best-selling album of all time",
      year: 1982,
      image: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
    },
    {
      artistId: 2,
      artist: 'Stone Temple Pilots',
      title: 'Core',
      description: "The debut studio album by American rock band Stone Temple Pilots.",
      year: 1970,
      image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Stone_Temple_Pilots_Core.jpg",
    },
  ]);

  const renderedList = () => {
    return albumList.map((album) => {
      return (
        <Card
          albumTitle={album.title}
          albumDescription={album.description}
          buttonText='OK'
          imgURL={album.image}
        />
      );
    });
  };

  return <div className='container'>{renderedList()}</div>;
};

export default App;
