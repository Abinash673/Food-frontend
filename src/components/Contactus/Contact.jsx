import './Contact.css'
import { useState } from 'react';

const Contact = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInput1Change = (event) => {
    setInputValue1(event.target.value);
  };

    
    return (
        <div className="message-popup">
            <div className="contactform">
            <h1>Contact Us</h1>
            <div className="formdetails">
            <input className='email'  value={inputValue} onChange={handleInputChange} type="email" placeholder='Your your email' />
            <br/>
            <input className='message' value={inputValue1} onChange={handleInput1Change} type="message" placeholder='Type your message' />
            <br/>
            <button className='btn'>Submit</button>
            </div>
        </div>
        </div>
        
    )
}

export default Contact
