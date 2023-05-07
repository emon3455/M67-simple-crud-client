import { useLoaderData } from "react-router-dom";
import Header from "./Header";

const Update = () => {
    
    const user = useLoaderData();

    return (
        <div>
            <Header></Header>
            <h2>Info Update for {user.name}</h2>

            <form>
                <input type="text" name="name" defaultValue={user && user?.name } id="name" /> <br />
                <input type="email" name="email" defaultValue={user && user?.email} id="email" /> <br />
                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default Update;