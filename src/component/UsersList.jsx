const UsersList = ({ usersList, deleteUsers, selectUsers }) => {
    
    console.log(usersList)
    
    return (
      <section className="allList">
        <h2 className="titleList">Lista de Usuarios</h2>
  
        <ul>
          {usersList?.map((users) => (
            <li key={users.id}>
              <h4>{users.name}</h4>
              <p>
                Nombre: {users.first_name}
              </p>
              <p>
                Apellido: {users.last_name}
              </p>
              <p>
                Email: {users.email}
              </p>
              <p>
                <b>Fecha de Nacimiento:</b> {users.birthday}
              </p>
             
  
              <button onClick={() => deleteUsers(users.id)} className="eraser">Eliminar</button>
  
              <button onClick={() => selectUsers(users)}className="edit">Editar</button>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default UsersList;
  