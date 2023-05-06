import { useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h3>Totall users: {users.length}</h3>
            <div className="">
                {
                    users.map(user=> <p key={user._id}> {user.name} : {user.email} </p>)
                }
            </div>
        </div>
    );
};

export default Users;