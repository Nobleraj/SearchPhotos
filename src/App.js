import react, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Photos from './components/Photos';

import { getAllPhotos } from './store/actions/photo';


function App() {
  const [image, setImage] = useState("");
  const dispath = useDispatch();

  const handleSubmit = () => {
    dispath(getAllPhotos(image)).then(()=>{
      setImage("");
    });
  }

  return (
    <div className="app">
      <div className="container">
        <div className="input-group">
          <input value={image} className="form-control width100" onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Search for photos" />
          <span className="input-group-btn">
            <button className="btn custom-button" onClick={handleSubmit} type="submit"><i className="fa fa-search" /></button>
          </span>
        </div>
        <Photos/>
        </div>
      </div>
  );
}

export default App;
