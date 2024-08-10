import Feature  from "./Feature";
import freeandopensourse from '../assets/freeandopensourse.jpg'
import easytolearn from '../assets/easytolearn.jpg'
import objorientedimg from '../assets/OIP.jpeg'

function Features(){
    return (
        <div className="cards">
            <Feature title='Free and Open Source' img={freeandopensourse}>Python is freely available for everyone to use and modify</Feature>
            <Feature title='Easy to Learn' img={easytolearn}>Python has a simple syntax that is easy to understand, making it a great choice for beginners</Feature>
            <Feature title='Object-Oriented' img={objorientedimg}>Python supports object-oriented programming, which helps in organizing code and making it reusable</Feature>
        </div>
    )
}
export default Features;