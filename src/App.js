import Header from './Components/Header';
import './App.css';
import './CSS/Header.css';
import { courses } from './Data';
import Courses from './Components/Courses';
import './CSS/Course.css'
function App() {
  return (
    <div > 
      <Header/>
        <div className='course-main'>
        {
          courses?.map((course)=>(
            <Courses key={course.id} course={course}/>
          ))
        }
        </div>
    </div>
  );
}

export default App;
