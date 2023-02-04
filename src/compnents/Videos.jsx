
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";


const Videos = ({ videos, direction }) => {
  // console.log("videosss", videos)
  if(!videos.length) return "Loading...";


  return (
    <>

      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={2}>
        {videos.map((item, idx) => {
          // console.log("item", item)
          return(

          <Box key={idx}>
           
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
          )
        }
          
          
        )}
      </Stack>
    </>
  )

}

export default Videos;
