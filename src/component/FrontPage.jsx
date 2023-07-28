import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import arrayValue from './Data';




const FrontPage = () => {
  const [item, setItem] = useState(arrayValue)
    const navigate = useNavigate();
    

      const filterItem = (titleItem)=>{
        const updateditem = arrayValue.filter((curElem)=>{
          return curElem.title === titleItem;
        })
        setItem(updateditem)
      }
  return (
    <div>
     
        <div className=' '>
        <img src="street.avif" alt="" className='street' />
        </div>
        <div className=' mb-5'>
            <div className='container d-flex flex-wrap justify-content-center '>
                <h6 className='  px-4 p-2  rounded-pill'  onClick={()=>setItem(arrayValue)}>ALL</h6>
                <h6 className='ms-2  px-4 p-2  rounded-pill'  onClick={()=>filterItem("TRAVEL")}>TRAVEL</h6>
                <h6 className='ms-2 px-4 p-2  rounded-pill'  onClick={()=>filterItem("BUSINESS")}>BUSINESS</h6>
                <h6 className='ms-2  px-4 p-2  rounded-pill'  onClick={()=>filterItem("EDUCATION")}>EDUCATION</h6>
                <h6 className='ms-2  px-4 p-2  rounded-pill'  onClick={()=>filterItem("FESTIVAL")}>FESTIVAL</h6>
                <h6 className='ms-2  px-4 p-2  rounded-pill' onClick={()=>filterItem("FOOD")}>FOOD</h6>
                <h6 className='ms-2  px-4 p-2  rounded-pill' onClick={()=>filterItem("TECHNOLOGY")}>TECHNOLOGY</h6>
                <h6 className='ms-2  px-4 p-2  rounded-pill'  onClick={()=>filterItem("SPORTS")}>SPORTS</h6>
                
                <h6 className='ms-2  px-4 p-2  rounded-pill' onClick={()=>filterItem("ART")}>ART</h6>
               
                
            </div>
        </div>
        <div className='all d-flex'>
          
        <div class="d-flex flex-wrap justify-content-evenly">
            {item?.slice(0,12).map(( item,index) => (
              
              <div className="d-flex flex-column" key={index}>
                <div onClick={()=>{
                  // console.log("hello", index);
                  
                  navigate(`/ImageEvent/${index}`)
                }}>
                  <img src={`${item.src}`} className='imagesizes' alt="hello" />
                </div>
                <a onClick={()=>{
                  // console.log("hello", index);
                  navigate(`/ImageEvent/${index}`)
                }} className='name text-center mt-1 mb-1 fs-4' href="">{item.name}</a>
                <div className='d-flex justify-content-evenly mt-2'>
                    <h6 className='bg-warning px-4 p-2 rounded-pill text-light'onClick={()=>filterItem(item.title)} style={{cursor:"pointer"}}>{item.title}</h6>
                    <i class="ri-calendar-2-fill text-warning fs-5"><span className='icontext ms-2'>{item.date}</span></i>
                </div>
                <p className='para'>{item.para}</p>
                <div className='d-flex justify-content-evenly mb-2'>
                    
                    <i class="ri-hourglass-fill text-warning fs-5"><span className='icontext  ms-2'>{item.show}</span></i>
                    <i class="ri-map-pin-line text-warning fs-5"><span className='icontext  ms-2'>{item.place}</span></i>
                   
                    <i class="ri-cash-line text-warning fs-5"><span className='icontext  ms-2'>{item.price}</span></i>
                </div>
                
               
              </div>
            ))}
            </div>
            </div>
            <div className='d-flex justify-content-center'>
            <Link to='/AllEvent'><button className='bg-warning px-5 p-2 rounded-pill text-light mb-5 mt-3'>All Items</button></Link>
            </div> 
           
    </div>
  )
}

export default FrontPage