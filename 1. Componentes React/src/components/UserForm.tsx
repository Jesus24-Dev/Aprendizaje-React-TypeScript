import type UserCardProps from "../types/UserCard";

interface UserFormProps {
    user: UserCardProps
    handleUsuario: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => void;
}

function UserForm({user, handleUsuario}: UserFormProps) {
    return (
        <div>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={handleUsuario} value={user.nombre}/>
            </div>
            <div>
                <label htmlFor="edad">Edad</label>
                <input type="number" id="edad" name="edad" onChange={handleUsuario} value={user.edad}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleUsuario} value={user.email}/>
            </div>
            <div>
                <label htmlFor="ocupacion">Ocupacion</label>
                <input type="text" id="ocupacion" name="ocupacion" onChange={handleUsuario} value={user.ocupacion}/>
            </div>
        </div>
    );
}

export default UserForm;