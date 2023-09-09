import axios from "axios";


const Base_url = 'https://youtube-v31.p.rapidapi.com/captions';

const options = {
  params: {
    maxResults: 50
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchAPI = async(url) =>{
    const {data}= await axios.get(`${Base_url}/${url}`);

    return data;
}