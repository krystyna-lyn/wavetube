import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchAPI } from "../utils/fetchAPI";
import Videos from "./Videos";




const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);

  const { id } = useParams();



  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items[0])
      })
  }, [id])


  if (!videoDetail) { return 'Loading..'; }

  const { snippet: { title, channelId, channelTitle } } = videoDetail;

  console.log(channelTitle)

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color='#fff' variant="h5" fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography color='#fff' variant={{sm: 'subtitle1', md:'h6'}} fontWeight='bold' p={2}>
                  {channelTitle}
                  <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                </Typography>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>



  )
}

export default VideoDetail