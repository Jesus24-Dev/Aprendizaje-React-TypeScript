import type UserCardProps from "../types/UserCard";

function UserCard({nombre, edad, email, ocupacion, imagenUrl}: UserCardProps) {

// ? Podria tener una imagen para la card.
    return (
        <div>
            {imagenUrl && <img src={imagenUrl} alt={`${nombre} profile picture`} />}
            <h3>{nombre}: {edad}</h3>
            <p>{ocupacion}</p>
            <a href={`mailto:${email}`}>{email}</a>
        </div>
    );
}

export default UserCard;