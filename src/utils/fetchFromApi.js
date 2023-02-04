import axios from 'axios';

const BASE_URL =  'https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
    //   relatedToVideoId: '7ghhRHRP6t4',
    //   part: 'id,snippet',
    //   type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    } 
  };

  export const fethFromApi = async (url)=> {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }











// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/search',
//   params: {
//     relatedToVideoId: '7ghhRHRP6t4',
//     part: 'id,snippet',
//     type: 'video',
//     maxResults: '50'
//   },
//   headers: {
//     'X-RapidAPI-Key': '079cfc9893msh7d4fd7a6766c12dp173c53jsn74d16cd48164',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });