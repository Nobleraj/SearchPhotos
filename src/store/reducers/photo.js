export const GET_ALL_PHOTOS = "GET_ALL_PHOTOS";
export const LOAD_MORE_PHOTOS = "LOAD_MORE_PHOTOS";

const initialState = {
    photos: [],
    dynamicPhotos : [],
    imageText : "",
    initialLoad : 8,
    nothingToLoad : true
};

const coinReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_PHOTOS:
            const photo = action.payload.photos;
            let visibility = true;
            const dynamic = [...photo];
            if(photo.length <=8 ){
                visibility = false;
            }
            if(photo.length>8){
               dynamic.length = state.initialLoad;
            }
            return { ...state, photos: photo,dynamicPhotos : dynamic, imageText : action.payload.imageText,initialLoad : 8,nothingToLoad : visibility  };

        case LOAD_MORE_PHOTOS:

           let updatedPhotos = [...state.photos];
           const result = updatedPhotos.slice(state.initialLoad,state.initialLoad + 8 );
           let dynamicPhotos = [...state.dynamicPhotos,...result];
           var initialLoad = state.initialLoad + 8;
           let visibility_ = true;
           if(state.photos.length > dynamicPhotos.length){
               visibility_ = true
           }else{
               visibility_ = false;
           }

           return { ...state, dynamicPhotos : dynamicPhotos, initialLoad : initialLoad,nothingToLoad : visibility_ };
    
        default:
            return state;
    }
};
export default coinReducer;