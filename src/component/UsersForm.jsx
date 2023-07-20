import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UsersForm = ({ addUsers, usersSelected, editUsers }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (usersSelected) {
      
      reset(usersSelected);
    } else {
      reset({
        fisrt_name: "",
        last_name: "",
        email: "",
        birthay:" ",
        password: "",
      });
    }
  }, [usersSelected]);

  const submit = (data) => {
    if (usersSelected) {
      
      editUsers(data);
    } else {
      addUsers(data);
    }
  };
console.log(usersSelected)


  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2 className="title">Usuarios</h2>

      <div className="input-container">
        <label htmlFor="p-first_name">Nombre:</label>
        <input
          type="text"
          id="p-first_name"
          {...register("first_name", { required: true })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="p-last_name">Apellido:</label>
        <input
          type="text"
          id="p-last_name"
          {...register("last_name", { required: true })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="p-email">Correo:</label>
        <input
          type="string"
          id="p-email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="p-birthday">Cumpleaños:</label>
        <input
          type="date"
          id="p-birthay"
          {...register("birthday", { required: Date })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="p-password">Contraseña:</label>
        <input
          type="password"
          id="p-password"
          {...register("password")}
        />
        <div>
        <input type="submit" value="Enviar datos"></input>
        </div>
      </div>
    </form>
  );
};

export default UsersForm;
