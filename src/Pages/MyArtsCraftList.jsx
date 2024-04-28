import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

const MyArtsCraftList = () => {

    const { user } = useAuth();
    // console.log( user );
    const [arts, setArts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myArts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setArts(data)
            })
    }, [user])

    return (
        <div>
            <h1>This is MyArtsCraftList {arts.length}</h1>
        </div>
    );
};

export default MyArtsCraftList;