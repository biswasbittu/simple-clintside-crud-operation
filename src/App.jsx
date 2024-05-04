import { Link, Outlet } from "react-router-dom";
import "./App.css";
function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    //  console.log("form Work succefully");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const users = { name, email };
    // console.log(users);

    fetch(`http://localhost:5000/users`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(users)
    })
      .then((res) => res.json())
      .then((data) =>{ 
        console.log(data);
        if(data.insertedId){
          alert('users Added Succefully');
          form.reset();


        }
      });
  };

  return (
    <>
      <Outlet />
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <br />
      <div>
        <button>
          <Link to="/users">Users</Link>
        </button>
      </div>
    </>
  );
}

export default App;
