import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
//   console.log(users);
const handleDelete = _id =>{
console.log(_id);
fetch(`http://localhost:5000/users/${_id}`, {
  method:'DELETE',
})
.then(res=>res.json())
.then(data=>{
  if (data.deletedCount > 0) {
    alert("Delete Succefully");
  }
});

}
  
  return (
    <div>
      <h1>Users:{users.length}</h1>

      <div>
        {users.map(user => (
          <p key={user._id}>
            Name:{user.name} email:{user.email} {user._id} <button
            onClick={()=>handleDelete(user._id)}
            >X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
