import { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import { Videos } from './';

import {useParams} from 'react-router-dom';

import { fethFromApi } from '../utils/fetchFromApi';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  //  console.log(videos)


  useEffect(() => {
    fethFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (

    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search Result For <span style={{ color: '#F31503', textDecoration:'underline' }}> {searchTerm}</span> Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}
export default SearchFeed;
