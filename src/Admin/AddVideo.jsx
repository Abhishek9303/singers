import React, { useState } from 'react'
import Dashboard from './Dashboard'
import './Dash.css'
const AddVideo = () => {
    const [Data, setData] = useState({
        video: "",
        thumbnail: "",
      });
    
      const handelClick = async () => {
        console.log("Data", Data);
    
        // try {
        //   const resp = await axios.post("url", Data);
        //   console.log("Video send Successfully");
        // } catch (error) {
        //   console.log("Something Error in Axios-->", error);
        // }
      };
    
  return (
    <>
    <Dashboard/>
    <div className='main'>
      <div className="container-fluid">
        <div className="row d-flex flex-column align-item-center justify-content-center">
          <div className=" mt-3  w-100  col-sm-12 col-md-6 col-md-6 ">
            <label className="fw-bold text-secondary">Video URL</label>
            <input
              type="text"
              placeholder="Video URL"
              onChange={(e) => setData({ ...Data, video: e.target.value })}
              className="form-control  "
              name="video"
              required
            />
          </div>

          <div className=" mt-3 w-100 mt-3  col-sm-12 col-md-6 col-md-6 ">
            <label className="fw-bold text-secondary">Image</label>
            <input
              type="file"
              onChange={(e) =>
                setData({ ...Data, thumbnail: e.target.files[0] })
              }
              className="form-control  "
              name="thumbnail"
              required
            />
          </div>

          <div className="d-flex align-item-center justify-content-center">
            <div className="col-md-4 mt-5 col-lg-4 col-sm-8 d-flex justify-content-center mt-3">
              <button onClick={handelClick} className="btn btn-primary w-75">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
    )
}

export default AddVideo