import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

const UsersForm = ({ isModalVisible, addUsers, usersSelected, editUsers, handlerClick }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (usersSelected) {

      reset(usersSelected);
    } else {
      reset({
        first_name: "",
        last_name: "",
        email: "",
        birthday: " ",
        password: "",
      });
    }
  }, [usersSelected]);

  const submit = (data) => {

    if (usersSelected) {

      editUsers(data);
      toast.success("Usuario editado correctamente")
      
    } else {
      addUsers(data);
      reset({
        first_name: "",
        last_name: "",
        email: "",
        birthday: " ",
        password: "",
      });
      
    }
  };

  return (
    <>
    <Toaster richColors />
      <button className="containerButton" onClick={handlerClick}>Nuevo Usuario</button>
      {!isModalVisible ? null :
        <form onSubmit={handleSubmit(submit)} className="formAll">
          <h2 className="title">Usuarios <spam><i onClick={handlerClick} class='bx bx-x close'></i></spam></h2>
          <div className="input-container">
            <input
            className="input"
              type="text"
              {...register("first_name")}
              placeholder="Ingrese su Nombre"
            />
          </div>
          <div className="input-container">
            <input
            className="input"
              type="text"
              {...register("last_name")}
              
              placeholder="Ingrese su Apellido"
            />
          </div>
          <div className="input-container">

            <input
            className="input"
              type="email"
              {...register("email")}
              
              autoComplete="off"
              placeholder="Ingrese su Email"
            />
          </div>
          <div className="input-container">
            <input
            className="input"
              type="password"
              {...register("password")}
              placeholder="Contraseña"
            />
          </div>
          <div className="input-container">
            <input
            className="input"
              type="date"
              {...register("birthday"
              )}
            />
          </div>
          <div className="sendData">
            <button type="submit">Guardar</button>
          </div>
        </form>}
    </>
  );
};

export default UsersForm;
