/* eslint-disable no-unused-vars */

import './App.css'

function App() {

  const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email  = form.email.value;
    const user  = {name, email}
    console.log(user);

    fetch("http://localhost:5000/users",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
  
    })
    .then(res=>res.json())
    .then(data=> {
      if(data.insertedId){
        alert("user successfully added");
      }
      console.log(data);
    })
    .catch(er=> console.log(er.message))

    form.reset();

  }

  return (
    <>
     
      <h1>simple crud</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" /> <br />
        <input type="email" name="email" id="email" /> <br />
        <input type="submit" value="Submit" />
      </form>
      
    </>
  )
}

export default App
