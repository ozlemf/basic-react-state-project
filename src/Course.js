import Angular from './img/angular.png';
import Csharp from './img/c.png';
import Java from './img/java.jpg';
import React from './img/react.png';
import './Course.css';

const courseMap = {
    Angular,
    Csharp,
    Java,
    React,
}

function Course({courseName}) {

    console.log(courseMap[courseName])

    return ( 
        <div className='courseDiv'>
            <img className='course' src={courseMap[courseName]} alt=""></img>
        </div>
     );
}

export default Course;