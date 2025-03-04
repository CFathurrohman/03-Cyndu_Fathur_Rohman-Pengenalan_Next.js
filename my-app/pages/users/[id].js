import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        setUser(data);
      };
      fetchUser();
    }
  }, [id]);

  return (
    <div>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Username:</strong> {user?.username}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Phone:</strong> {user?.phone}</p>
      <p><strong>Website:</strong> {user?.website}</p>
      <p><strong>Address:</strong> {user?.address?.street}, {user?.address?.city}</p>
      <p><strong>Company:</strong> {user?.company?.name}</p>
    </div>
  );
};

export default UserDetail;
