import React, { useEffect, useState } from "react";
import User from "../components/users/User";
import ApiGetFunc from "../funcs/ApiGetFunc";

export default function Users() {
  const [myUsers, setMyusers] = useState([]);

  useEffect(() => {
    ApiGetFunc("https://jsonplaceholder.typicode.com/users",setMyusers);
  }, []);

  return (
    <div>
      {myUsers.map((user) => (
        <User username = {user.username} email={user.email} street = {user.address.street}/>
      ))}
    </div>
  );
}
