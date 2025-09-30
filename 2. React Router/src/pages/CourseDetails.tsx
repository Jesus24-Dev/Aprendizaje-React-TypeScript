import { useNavigate, useParams } from "react-router-dom";

function CourseDetails() {
    const {id} = useParams()
    const navigate = useNavigate();

    const returnCourses = () => {
        navigate('/courses')
    }
    return (
        <div>
            <h1>This is course detail page</h1>
            <p>Details of article {id}</p>
            <button onClick={returnCourses}>Return to courses</button>
        </div>
    );
}

export default CourseDetails;