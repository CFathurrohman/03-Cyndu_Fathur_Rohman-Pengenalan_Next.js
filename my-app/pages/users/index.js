import { useState, useEffect } from "react";
import Link from "next/link";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const users = await response.json();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Daftar User</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;