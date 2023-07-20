import UsersForm from "./component/UsersForm";
import UsersList from "./component/UsersList";
import Modal from "./component/Modal";
import { useState, useEffect } from "react";
import axios from "axios"


function App() {
  const [usersList, setUsersList] = useState([]);
  const [usersSelected, setUsersSelected] = useState(null);

  const getAllUsers = () => {
    axios
      .get('https://users-crud.academlo.tech/users/')
      .then((resp) => setUsersList(resp.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const addUsers = (newUsers) => {
       axios
      .post("https://users-crud.academlo.tech/users/", newUsers)
      .then(() => {
        getAllUsers();
        setUsersSelected(undefined);
      })
      .catch((error) => console.error(error));
  };

  const deleteUsers = (id) => {
 
    axios
      .delete(`https://users-crud.academlo.tech/users/${id}/`)
      .then(() => getAllUsers())
      .catch((error) => console.error(error));
  };

  const selectUsers = (users) => {
    setUsersSelected(users);
  };

  const editUsers = (users) => {
 
    axios
      .put(
        `https://users-crud.academlo.tech/users/${users.id}/`,
        users
      )
      .then(() => {
        getAllUsers();
        setUsersSelected(null);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main>
      <UsersForm
        addUsers={addUsers}
        usersSelected={usersSelected}
        editUsers={editUsers}
      />

      <UsersList
        usersList={usersList}
        deleteUsers={deleteUsers}
        selectUsers={selectUsers}
      />
      <div>
        <button className="containerButton">Nuevo Usuario</button>
      </div>
    </main>
   
  );
}

export default App;
