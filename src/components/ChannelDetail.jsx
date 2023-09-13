import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos, ChannelCard} from './';
import { fetchAPI } from "../utils/fetchAPI";

const ChannelDetail = () => {

const {id} =  useParams();
const {channelDetail, setChannelDetail} = useState(null);
const {videos, setVideos} = useState([]);

useEffect(()=>{
fetchAPI(`channels?part=snippet&id=${id}`)
.then((data)=>setChannelDetail(data?.items[0]))

fetchAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
.then((data)=>setVideos(data?.items[0]))
},{id})


  return (
    <Box>

    </Box>
  )
}

export default ChannelDetail