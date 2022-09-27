import React, { useState } from 'react';
import { useEffect } from 'react';


const Form = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const userChange = (e) => {
      setUser(e.target.value)
    }
    const passChange = (e) => {
      setPass(e.target.value)
    }
    
    function handleSubmit(e) {
      e.preventDefault();
    }

    const [state, setState] = useState ("pepe");
    useEffect (() => {
      console.log (state);
      if (state === "jorge") return;
      
        setState("Jorge")},[state])
    

  return (
    <main>
     
      <form onSubmit={handleSubmit} className="form-signin w-100 m-auto">
        <div>
          <input type="text" placeholder="Default User" required="required" value={user} onChange={(e) => userChange(e)} className="form-floating"/>
          <input type="password" placeholder="Default Password" required="required" value={pass} onChange={(e) => passChange(e)} className="form-floating"/>

          <button onClick={e =>  {console.log ('El usuario es:',  user, 'y a password es:', pass)}} className="w-100 btn btn-lg btn-primary">
            Enviar usuario y pass a la consola
          </button>
        </div>
      </form>
  
      {/* <div className="container"> 
          <div className="row"> 
            <div className="col-md-6"> 
              <div className="card">
                <form onSubmit={handleSubmit} className="box"> 
                  <h1>Login</h1> 
                  <p className="text-muted"> Please enter your login and password!</p> 
                  <input type="email" placeholder="Default User" required="required" value={user} onChange={(e) => userChange(e)} />
                  <input type="password" placeholder="Default Password" required="required" value={pass} onChange={(e) => passChange(e)} />
                  <input type="submit" value="Login" onClick={e =>  {console.log ('El usuario es:',  user, 'y a password es:', pass)}}/> 
                </form> 
              </div> 
            </div> 
          </div>
        </div> */}
    </main>
   
  );
};

export default Form;