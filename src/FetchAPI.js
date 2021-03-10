import React, {useState, useEffect} from 'react'

const FetchAPI = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        setUsers(await response.json());
    }
    useEffect(() => {
       getUsers();
    }, []);

    return (
        <>
        {
            users.filter((val, ind)=> (ind<2)).map((val, ind)=>{
                return(
                    <div key={val.id}>
                    <p>{val.title}</p>
                    <img src={val.url} width="120" />
                    </div>
                )
            }
            )
        }
        </>
       
    )
}

export default FetchAPI
