import { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/CardList.css";

const CardList = () => {
    const [users, setUsers] = useState();

    const baseUrl = "https://jsonplaceholder.typicode.com/users/";

    useEffect(() => {
        async function getData() {
            await fetch(baseUrl)
                .then((data) => data.json())
                .then((res) => { setUsers(res) })
                .catch((err) => alert(err));
        }
        getData();

    }, []);

    return (
        <>
            <div className="container py-4">
                <div className="container-card">
                    {users &&
                        users.map((user, index) =>
                            <Card key={index} user={user} />)}
                </div>
            </div>

        </>
    )



}

export default CardList;

