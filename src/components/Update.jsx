import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const Update = () => {

    const user = useLoaderData();

    const handleSubmit = e =>{
        e.preventDefault();
        const form  = e.target;
        const name  = form.name.value;
        const email = form.email.value;
        console.log(name,email);
        const updatedUser = {name, email};

        fetch(`http://localhost:5000/users/${user._id}`,{
            method: "PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount>0){
                alert("user updated successfully");
            }
        })
        .catch(er=> console.log(er.message))

    }

    return (
        <div>
            <Header></Header>
            <h2>Info Update for {user.name}</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={user && user?.name } id="name" /> <br />
                <input type="email" name="email" defaultValue={user && user?.email} id="email" /> <br />
                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default Update;