import { Link } from "react-router-dom";

interface Props {
    login: () => void
}

function Home({login}: Props) {

    return (
        <div>
            <h1>This is home page</h1>
            <button onClick={login}>Login</button>
            <Link to={"/courses"}>Go to courses</Link>
        </div>
    );
}

export default Home;