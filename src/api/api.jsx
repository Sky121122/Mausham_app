import axios from "axios";

const apikey = "Your api key";
const baseUrl = "http://api.weatherapi.com/v1/forecast.json"


const today = new Date().toISOString().split("T")[0];



export async function fetchApi (loc){

    const url=`${baseUrl}?key=${apikey}&q=${loc}&days=7&aqi=no&alerts=no`;
    return await axios.get(url,{
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log("error while fetching data, ", err);
        return null;
    })
}


export async function fetchAstro(loc) {
    const astroapi = `http://api.weatherapi.com/v1/astronomy.json?key=${apikey}&q=${loc}&dt=${today}`

    return await axios.get(astroapi).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log("error while fetching astro data, ", err);
        return null  
    })
}