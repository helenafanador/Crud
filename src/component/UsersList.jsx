const UsersList = ({ usersList, deleteUsers, selectUsers, handlerClick }) => {
    
    
    return (
      <section className="allList">
        <h2 className="titleList">Lista de Usuarios</h2>
        <ul className="users">
        
          {usersList?.map((users) => (
            <li key={users.id} className="bdUser">
              <h4>{users.name}</h4>
              <p>
               <b> Nombre:</b> {users.first_name}
              </p>
              <p>
               <b> Apellido:</b> {users.last_name}
              </p>
              <p>
              <b>Email:</b> {users.email}
              </p>
              <p>
                <b>Fecha de Nacimiento:</b> {users.birthday}
              </p>
             
               <div className="buttons">
               <button onClick={() => deleteUsers(users)} className="eraser">Eliminar</button>
  
                <button onClick={() => {
                  selectUsers(users)
                handlerClick()
                }}className="edit">Editar</button>
               </div>
              
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default UsersList;
  