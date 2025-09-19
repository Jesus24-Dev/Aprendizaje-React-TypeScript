import { useEffect, useState } from "react";
import UserCard from "./components/UserCard"
import type UserCardProps from "./types/UserCard";
import UserForm from "./components/UserForm";

function App() {
  const [esEdicion, setEsEdicion] = useState<boolean>(false);
  const [usuario, setUsuario] = useState<UserCardProps>({
    nombre: "Jesús",
    edad: 21,
    email: "jesussirit24@gmail.com",
    ocupacion: "Developer",
    imagenUrl: ""
  });

  const handleUsuario = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {
    const { name, value, type } = e.target;
    setUsuario(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  useEffect(() => {
    if (!esEdicion) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    }
  }, [esEdicion, usuario]);

  return (
    <>
      <UserCard {...usuario}/>
      <button onClick={() => setEsEdicion(!esEdicion)}>{esEdicion ? 'Guardar' : 'Editar perfil'}</button>

      {esEdicion && <UserForm user={usuario} handleUsuario={handleUsuario}/>}
    </>
  )
}

export default App
