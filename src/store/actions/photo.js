import axios from 'axios';
import { GET_ALL_PHOTOS } from '../reducers/photo';
const accessKey = '-Dt3VybUWJcvdl365_5Z30osSCF2mtJ_KT-ebbjF3TM';

export const getAllPhotos = (image) =>{
    const url = "https://api.unsplash.com/search/photos?page=1&per_page=1000&query=" + image + "&client_id=" + accessKey;
    return async dispatch =>{
        await axios.get(url).then((response) => {
            console.log(response.data);
            dispatch({
                type : GET_ALL_PHOTOS,
                payload : { photos : response.data.results , imageText : image }
            })
          }).catch(err=>{
            dispatch({
                type : GET_ALL_PHOTOS,
                payload : []
            })
        })
        
    }
}
