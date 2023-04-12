import   axios from "axios";

const BASE_URL='https://youtube138.p.rapidapi.com';
const options = {
  
    params: {q: 'Kedarnath yatra 2022 | Kedarnath budget tour || Kedarnath vlog day 1 | #kedarnath #kedarnath2022', hl: 'en', gl: 'IN'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
 export const fetchDataFromAPI=async(url)=>{

    const {data}=await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }