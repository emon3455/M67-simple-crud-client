import { useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData();
    
    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/users/${id}`,{
            method: "DELETE",

        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        .catch(er=> console.log(er.message))
    }

    return (
        <div>
            <h3>Totall users: {users.length}</h3>
            <div className="">
                {
                    users.map(user=> <p key={user._id}>
                     {user.name} : {user.email} <button onClick={()=> handleDelete(user._id)}> X </button> 
                     </p>)
                }
            </div>
        </div>
    );
};

export default Users;