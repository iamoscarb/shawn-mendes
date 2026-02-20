import { Box } from '@mui/material';
import { GroupButton } from './shared/components/GroupButton/GroupButton';
import { DialogVideo } from './shared/components/Dialog/DialogVideo';
import { useState } from 'react';
import { CardMedia } from './shared/components/Card/CardMedia';

const shawnInfo = {
  albumName: 'Shawn',
  albumSinger: 'Shawn Mendes',
  albumCover: 'https://www.shawnmendesofficial.com/wp-content/uploads/sites/2687/2024/08/artwork-440x440-1-compressed.jpg',
  albumTracks: [
    { name: "Who I Am", singer: 'Shawn Mendes', time: "1:00", track: 1 },
    { name: "Why Why Why", singer: 'Shawn Mendes', time: "1:00", track: 2, url: 'lS8Ps16Eelg?si=RcL5g2wtZ8ssYLTD' },
    { name: "That's The Dream", singer: 'Shawn Mendes', time: "1:00", track: 3 },
    { name: "Nobody Knows", singer: 'Shawn Mendes', time: "1:00", track: 4 },
    { name: "Isn't That Enough", singer: 'Shawn Mendes', time: "1:00", track: 5 },
    { name: "Heart of Gold", singer: 'Shawn Mendes', time: "1:00", track: 6 },
    { name: "Heavy", singer: 'Shawn Mendes', time: "1:00", track: 7 },
    { name: "That'll Be The Day", singer: 'Shawn Mendes', time: "1:00", track: 8 },
    { name: "In Between", singer: 'Shawn Mendes', time: "1:00", track: 9 },
    { name: "The Mountain", singer: 'Shawn Mendes', time: "1:00", track: 10 },
    { name: "Rollin' Right Along", singer: 'Shawn Mendes', time: "1:00", track: 11 },
    { name: "Hallelujah", singer: 'Shawn Mendes', time: "1:00", track: 12 }
  ],
  albumLink: [
    { key: 'spotify', platform: 'Spotify', link: 'spotify.com' },
    { key: 'amazonMusic', platform: 'Amazon Music', link: 'amazonmusic.com' },
    { key: 'appleMusic', platform: 'Apple Music', link: 'applemusic.com' },
    { key: 'otherMusic', platform: 'More', link: 'shawnmendes.com' }
  ]
}

const handleServiceClick = async (term: string) => {
  console.log(term);

}

function App() {

  let song = { track: 0, name: '', singer: '', url: 'lS8Ps16Eelg?si=RcL5g2wtZ8ssYLTD' };

  const [songData, setSongData] = useState(song)
  const [openDialog, setOpenDialog] = useState(false)

  const handleSongClick = async (song?: any) => {
    setSongData(song);
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  return (
    <>
      <Box className="p-5 md:p-8 lg:p-9" sx={{ bgcolor: 'secondary.main' }}>
        <CardMedia albumInfo={shawnInfo} onSongClicked={handleSongClick} />
        <GroupButton services={shawnInfo.albumLink} onButtonClicked={handleServiceClick} />
        <DialogVideo song={songData} openDialog={openDialog} closeDialog={handleCloseDialog} />
      </Box>
    </>
  )
}

export default App
