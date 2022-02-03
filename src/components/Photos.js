import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Photos = (props)=> {

  const dispatch = useDispatch();
  const { photos,dynamicPhotos,imageText,nothingToLoad } = useSelector(state => state.photo);
  
  const loadMorePhotos = () => {
    dispatch({
      type : "LOAD_MORE_PHOTOS",
    })
  }

  return (    
    <>
      { photos.length>0 && <>
        <div className="header"><h2>{imageText}</h2>
        <p>{photos.length} images has been found</p>
        </div>
        
        <div className="result">
          {dynamicPhotos.map((image, i) => (
            <div key={i} className="custom-card">
              <img src={image.urls.thumb} className="rounded" />
            </div>
          ))}
          </div>
          {nothingToLoad &&
          <div className="load-more-wrapper">
          <button onClick={()=>loadMorePhotos()} className="load-more">Load More</button>
          </div>
           }
    </> 
    }
    </>
  );
};

export default Photos;