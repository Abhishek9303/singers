import React,{useState} from 'react';
import arrayValue from './Data'
import { useNavigate, useParams } from 'react-router-dom'


const Pagetwo = () => {
  const [item, setItem] = useState(arrayValue)
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const obj = arrayValue[id];


 
 
  // console.log(obj);
  const path = `http://localhost:5173/${obj.src}`;
  return (
    <div className=''>
      
      <div className=' '>
     <img src="http://localhost:5173/street.avif" alt="" className='street' />
       

      </div>
       
      <div className='maindiv d-flex bg-secondary bg-opacity-25'>
        <div className='left ms-5 w-75 '>
        <img src={path}  alt="" width={"100%"} className='mb-2' />
          <div className='bg-light p-3'>
          <p className='paragraph p-4'>{obj.paragraph}</p>
          <div className='business ms-2'>
            <a  href="">BUSINESS</a>
            <a href="">CONFERENCE</a>
            <a href="">EVENTS</a>
            <a href="">HOTEL</a>
            <a href="">MEETUP</a>
          </div>
          <h6 className='mt-4 ms-4 '>SHARE THIS EVENT</h6>
          <div className='icon ms-4 fs-5 mt-4 mb-4   '>
            <i  class="ri-facebook-fill  text-light rounded-circle p-2"></i>
            <i class="ri-twitter-fill text-light rounded-circle p-2 ms-2"></i>
            <i class="ri-linkedin-fill  text-light rounded-circle p-2 ms-2"></i>
            <i class="ri-whatsapp-line text-light rounded-circle p-2 ms-2"></i>
            <i class="ri-mail-line text-light rounded-circle p-2 ms-2"></i>
          </div>
          </div>
          <div className='bg-light mt-4'>
          <div className='speakers d-flex flex-wrap mb-4  '>
            <li className='p-4 px-4'>Speakers</li>
            <li className='p-4 px-4'>Shedule</li>
            <li className='p-4 px-4'>Ticket</li>
            <li className='p-4 px-5'>Map</li>
            <li className='p-4 px-4'>Tour</li>
            <li className='p-4 px-5'>FAQ</li>
            <li className='p-4 px-4'>Contact</li>
          </div>
          <div>
            <div className='imagedown'>
              {Object.keys(obj).map((key, id) => {
                if (key.startsWith('src') && key.length > 3) {
                  return (
                    <div key={id} >
                      <img src={`${obj[key]}`} alt="" className='mb-5' />
                      <div className='imagetext'>
                        <h4>Saul R. Lopez</h4>
                        <h6>CEO & FOUNDER</h6>
                        <h6>GLORIA INC.</h6>
                        <p className='hover'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, dolore possimus! Assumenda laboriosam labore vero?</p>
                        <div className='hover'>
                          <i class="ri-facebook-circle-fill"></i>
                          <i class="ri-twitter-fill"></i>
                          <i class="ri-linkedin-box-fill"></i>
                          <i class="ri-whatsapp-fill"></i>
                          <i class="ri-mail-open-fill"></i>
                        </div>


                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            </div>



          </div>
          <div className='bg-light mt-4'>
          <div className='ms-4  py-3 border-bottom '><h4>Photos</h4></div>
       
          <div className='photo py-5'>
            <img src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/speaker-photos-3-1536x1024.jpg" alt="" />
            <img src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/speaker-photos-1-1536x778.jpg" alt="" />
            <img src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/event-2-1536x1024.jpg" alt="" />
            <img src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/event-3-1536x1024.jpg" alt="" />
            <img src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/event-4-1536x1024.jpg" alt="" />
            <img src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/event-6-1536x1024.jpg" alt="" />
          </div>
          </div>
         


          {/* right */}
        </div>
        <div className='right d-flex flex-column align-items-center    ' >
          <div className='righttop mt-5 bg-light '>
            <div className='d-flex justify-content-evenly mt-5'>
              <h3>Event Details</h3>
              <div>
              <span className='three'>3</span>
              <span className='three'>3</span>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
            <i class="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-center'>
            <button className='  rounded-pill'>ADD TO CALENDER</button>
            </div>
          </div>
          <div className='rightdown d-flex flex-column align-items-center bg-light'>
            <h2 className=''>Related <span>Events</span></h2>
            <p>You might also love these event</p>
          <div class="d-flex flex-wrap justify-content-evenly">
            {item?.slice(0,3).map(( item,index) => (
              
              <div className="d-flex flex-column w-100" key={index}>
                <div onClick={()=>{
                  // console.log("hello", index);
                  navigate(`/pagetwo/${index}`)
                }}>
                   <img src={`http://localhost:5173/${item.src}`} className='w-100 mt-2'  alt="" />
                </div>
                <a onClick={()=>{
                  // console.log("hello", index);
                  navigate(`/pagetwo/${index}`)
                }} className='name text-center mt-1 mb-1 fs-4' href="">{item.name}</a>
                <div className='d-flex justify-content-evenly mt-2'>
                    <h6 className='bg-warning px-4 p-2 rounded-pill text-light'  style={{cursor:"pointer"}}>{item.title}</h6>
                    <i class="ri-calendar-2-fill text-warning fs-5"><span className='icontext ms-2'>{item.date}</span></i>
                </div>
                <p className='para w-100'>{item.para}</p>
                <div className='d-flex justify-content-evenly mb-2'>
                    
                    <i class="ri-hourglass-fill text-warning fs-5"><span className='icontext  ms-2'>{item.show}</span></i>
                    <i class="ri-map-pin-line text-warning fs-5"><span className='icontext  ms-2'>{item.place}</span></i>
                   
                    <i class="ri-cash-line text-warning fs-5"><span className='icontext  ms-2'>{item.price}</span></i>
                </div>
                
               
              </div>
            ))}
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Pagetwo




