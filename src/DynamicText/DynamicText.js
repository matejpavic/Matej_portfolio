import './DynamicText.css';
import Typical from 'react-typical';

const DynamicText = () => {
  return (
    <Typical
      className='animation'
      steps={
        [
          'Hello there', 1000, 
          'My name is Matej', 1000,
          'I am a web developer', 1000
        ]    
      }
      loop={Infinity}
      wrapper="p"
    />
  );
}

export default DynamicText;