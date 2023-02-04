import {useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';    //for playing videos;
import { Typography, Box, Stack } from '@mui/material';

import {Videos} from './';
import { fethFromApi } from '../utils/fetchFromApi';
import { CheckCircle, ViewColumnOutlined } from '@mui/icons-material';



const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  const {id} = useParams();

  useEffect(()=> {
    fethFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=> setVideoDetail(data.items[0]))
    .catch((err) => console.log(err))

    fethFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=> setVideos(data.items))
    .catch((err)=> console.log(err))
  }, [id])

  if(!videoDetail?.snippet) return "Loading..." 
  // if(!videos?.snippet) return "Loding..."
  const {snippet : { title, channelId, channelTitle }, statistics:{viewCount, likeCount} } = videoDetail;
  console.log("vido", videoDetail)
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player' controls />
              <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                {/* {videoDetail?.snippet?.title} */}
                {title}
              </Typography>
              <Stack direction='row' justifyContent='space-between' sx={{color: '#fff'}} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm: 'subtitle1', md:'h6'}} color='#fff'>
                    {channelTitle}
                    <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'5px'}} />
                </Typography>
                </Link>
                <Stack direction='row' gap="20px" justifyContent="center">
                  <Typography variant='body1' sx={{opacity: 0.7}}>
                     {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant='body1' sx={{opacity: 0.7}}>
                     {parseInt(likeCount).toLocaleString()} Likes
                  </Typography>
                </Stack>

              </Stack>
          </Box>
        </Box>

      <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'>
        
        <Videos videos={videos} direction={'column'} />

      </Box>
      </Stack>

      
    </Box>
  )
}

export default VideoDetail;
