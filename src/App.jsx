import UsersForm from "./component/UsersForm";
import UsersList from "./component/UsersList";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios"
import { Toaster, toast } from "sonner";


function App() {
  const [usersList, setUsersList] = useState([]);
  const [usersSelected, setUsersSelected] = useState(null);
 

  const getAllUsers = () => {
    axios
      .get('https://users-crud-dv3n.onrender.com/users')
      .then((resp) => setUsersList(resp.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const addUsers = (newUsers) => {
       axios
      .post("https://users-crud-dv3n.onrender.com/users", newUsers)
      .then(() => {
        getAllUsers();
        setUsersSelected(undefined);
        toast.success(`El Usuario ${newUsers.first_name} ${newUsers.last_name} se ha creado correctamente`)
        setIsModalVisible(!isModalVisible)

      })
      .catch((error) => console.error(error));
  };

  const deleteUsers = (users) => {
 
    axios
      .delete(`https://users-crud-dv3n.onrender.com/users/${users.id}`)
      .then(() => {
        getAllUsers()
        toast.error(`El Usuario ${users.first_name} ${users.last_name} se ha eliminado`)
      
      })
      .catch((error) => console.error(error));
  };

  const selectUsers = (users) => {
    setUsersSelected(users);
  };

  const editUsers = (users) => {
 
    axios
      .put(
        `https://users-crud-dv3n.onrender.com/users/${users.id}`,
        users
      )
      .then(() => {
        getAllUsers();
        setUsersSelected(null);
        setIsModalVisible(!isModalVisible)
      })
      .catch((error) => console.error(error));
  };
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handlerClick = () => {
    setIsModalVisible(!isModalVisible)

    
  }

  return (
    <main>

       <Toaster richColors/>
      <UsersForm
        addUsers={addUsers}
        usersSelected={usersSelected}
        editUsers={editUsers}
        handlerClick={ handlerClick}
        isModalVisible={isModalVisible}
      />

      <UsersList
        usersList={usersList}
        deleteUsers={deleteUsers}
        selectUsers={selectUsers}
        handlerClick={ handlerClick}
      />
     
    </main>
   
  );
}

export default App;
