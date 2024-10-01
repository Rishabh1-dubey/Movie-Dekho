import axios from "../../utils/axios"
import { loadmovie } from "../reducers/movieSlic"
export const asyncloaddMovies =(id)=>async(dispatch,getState)=>{
try{
const detail=await axios.get(`/movie/${id}`)
const externalid=await axios.get(`/movie/${id}/external_ids`)
const recommendations = await axios.get(`/movie/${id}/recommendations`) 
const similar = await axios.get(`/movie/${id}/similar`) 
const videos = await axios.get(`/movie/${id}/videos`) 
const watchproviders = await axios.get(`/movie/${id}/watch/providers`) 

let theUltimatedetails={
    detail:detail.data,
    externalid:externalid.data,
    recommendations:recommendations.data.results,
    similar:similar.data.results,
    videos:videos.data.results.find((m)=>m.type==="Trailer"),
    watchproviders:watchproviders.data.results.IN,
    
}
dispatch(loadmovie(theUltimatedetails))
console.log(theUltimatedetails);
}catch(error){
    console.log("Error",error)

}
}