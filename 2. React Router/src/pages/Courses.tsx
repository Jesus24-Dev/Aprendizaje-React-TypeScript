import { useEffect, useState } from 'react';
import data from '../data/courses.json'
import type { CourseType } from '../types/CourseType';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
    logout: () => void
}

function Courses({logout}: Props) {

    const [courses, setCourses] = useState<CourseType[]>()
    const navigate = useNavigate()

    useEffect(() => {
        setCourses(data);
    }, [])

    const handleLogout = () => {
        logout();
        navigate("/")
    }

    return (
        <div>
            <h1>This is courses page</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>teacher</th>
                        <th>Go</th>
                    </tr>
                </thead>
                <tbody>
            {courses?.map(course => (
                <tr>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>{course.description}</td>
                    <td>{course.teacher}</td>
                    <td><Link to={`/courses/${course.id}`}>Go</Link></td>
                </tr>
            ))}

            </tbody>
            </table>
            <button onClick={handleLogout}>Logout </button>
        </div>
    );
}

export default Courses;