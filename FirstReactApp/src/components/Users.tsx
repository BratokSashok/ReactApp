import React, { useEffect, useState } from "react"
import axiosInstance from "../api/axiosInstance";

interface Users{
    id: number,
    name: string,
    birthday?: string 
}

interface User{
    users: Users[]
}

const Users = () => {
    const [users, setusers] = useState<Users>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axiosInstance.get('/users');
                setusers(response.data);
    
            } catch (error) {
                console.error('Error of loading users', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchUsers();
    },[])

    if(loading) return <div>Loading...</div>

    return(
        <div>
            <h1>Users list</h1>
            <ul>
                {users.map((user) => (
                      <li key={user.id}>
                        {ser.name} ({user.email})
                    </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default Users;