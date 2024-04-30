

import './App.css'
function App() {

  const handleAddUser = e=>{
    e.preventDefault();
//  console.log("form Work succefully");
 const form =e.target;
 const name =form.name.value;
 const email =form.email.value;
 const users={name,email}
 console.log(users);
  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App
