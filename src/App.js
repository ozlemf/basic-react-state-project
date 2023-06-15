import './App.css';
import Course from './Course';
import {useState} from 'react';

function getRandomCourse() {
  const courseArray = ['Angular', 'Csharp', 'Java', 'React'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
  //math floor tabana yuvarlar, math random 0-1 arası değer alır, course lenght arrayin uzunluğudur yani 4tür
}

function App() {

  const [courses, setCourses] = useState([]);

  const handleClick = () => {
  setCourses([...courses, getRandomCourse()]);
  //...courses daha önceki courselar geçerli, sonra random seçmeye devam et
  };
  const courseList =  courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
    });

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>Add Course</button>
       <div className='courseList'>
        {courseList}
       </div>
    </div>
  );
}

export default App;
