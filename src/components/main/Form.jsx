import React from 'react';

const Form = () => {
    return (
        <section className='form'>
          <h2 className='title_form'>Contact us</h2> 
          <div className='message'>
            <input className="input" type="text" placeholder='Firstname'/>
            <input className="input" type="text" placeholder='Lastnamename'/>
            <input className="input" type="text" placeholder='Mail adress'/>
            <textarea className="input text_message" type="text" rows="5" placeholder='Message'/>
          </div>
        </section>
    );
};

export default Form;