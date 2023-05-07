import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users , setUsers] = useState(loadedUsers);

    const handleDelete = (id)=>{

        fetch(`http://localhost:5000/users/${id}`,{
            method: "DELETE",
        })
        .then(res=> res.json())
        .then(data=> {
            if (data.deletedCount === 1) {
                alert("Successfully deleted");
                const remaining = users.filter(usr => usr._id !== id);
                setUsers(remaining);
            }else {
               alert("No documents Deleted ");
            }
        })
        .catch(er=> console.log(er.message))

    }

    return (
        <div>
            <Header></Header>

            <h3>Totall users: {users.length}</h3>
            <div className="">
                {
                    users.map(user=> <p key={user._id}>
                     {user.name} : {user.email} <Link to={`/update/${user._id}`}> <button>Update</button> </Link> <button onClick={()=> handleDelete(user._id)}> X </button> 
                     </p>)
                }
            </div>
            
        </div>
    );
};

export default Users;