import React from 'react'
import image from '../image/registration.jpg';

const Login = () => {
  return (
    <div>
        
        <div> <section class="Background">
      
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col ">
            <div class="card card-form" >
              <div class="row g-0">
              <div class="col-xl-6 d-none d-xl-block">
              <img className='logo ms-100 w-100 vh-100 img' src={image} alt="logo"  />
                  </div>
                  <div class="col-xl-6">
              <form>
                <div class="card-body p-md-5 text-black">
                <div class="d-flex justify-content-center pt-3">
                <h1 class="fw-Bolder mb-3 pb-3 headeing" >Login</h1>
                </div>
                <br/><br/>
    <div class="form-outline mb-2">
  
      <input type="text"  class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UserName"/>
     
    </div>
    <br/>
    <div class="form-outline mb-2">
    
      <input type="text"  class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <br/>
   
   
  
    
  
    <br/>
    <div class="d-flex justify-content-center pt-3">
  
                        <button type="button" class="btn btn-secondary btn-lg">Cancel</button>
                     
                        <button  type="submit" class="btn btn-secondary btn-lg ms-2">Login</button>
                      </div> 
    </div>
  </form>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  </section>
      </div>

    </div>
  )
}

export default Login