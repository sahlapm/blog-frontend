import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios';

const Home = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:8082/')
      .then((getData)=>{
          setApiData(getData.data);
         
    })
  },[])
  

   
    
  return (
    <div>
  <Navbar/>
 <section class="Background">
      
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col ">
            <div class="card card-table" >
              <div class="row g-0">
              <div class="d-flex justify-content-center pt-3">
              <h1 class="fw-Bolder mb-3 pb-3 headeing" >Blog List</h1>
              </div>
              <div>
       



              <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

               
                <div className="row g-3">

                {apiData.map(data=>{
return(
  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">

                          <div class="card text-bg-light mb-3" >
                          <div class="card-header">{data.category}</div>
                          <div class="card-body">
                            <h5 class="card-title">{data.title}</h5>
                            <p class="card-text">{data.content}</p>
                            <h5 class="card-title">{data.author}</h5>
                          </div>
                        </div>
                        </div>
                        )
                    }
                )}

    </div>

                    </div>
                </div>
            </div>



              </div>  

              </div>
            </div>
          </div>
        </div>
     

  </section>





    </div>
  )
}

export default Home