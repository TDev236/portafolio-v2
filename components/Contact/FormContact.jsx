import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const FormContact = () => {
  const form = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if(!form.current.value) return alert('Please fill all the fields');
    
    emailjs.sendForm('service_9k0c7xh', 'template_vctotlz', form.current, 'pIBD5W5s47Rne__j5')
    .then((result) => {
      console.log(result.text);
    }, error => console.log(error.text)
    );
  };

  return (
    <div className='flex justify-center mt-4'>
      <form ref={form} onSubmit={onSubmit}>
        <div>
          <p className='formTitle'>Name</p>
          <input  
            name="user_name"
            className="formInput" type="text" id="" />
        </div>
        <div>
          <p className='formTitle'>Email</p>
          <input 
            name="user_email"
            className="formInput" type="email" />
        </div>
        <div className='mt-4'>
          <p className='formTitle'>Message</p>
          <textarea name="message"  className='resize-none shadow-xl border-2 rounded-xl mt-2 p-4 outline-none'  id="" cols="30" rows="8"></textarea>
        </div> 
        <div className='flex justify-end my-4'> 
          <input type='submit' value="Send"  className='border-2 border-[#00005f] p-2 rounded-xl bg-[#00005f] text-white' placeholder='Submit'/>
        </div>
        
      </form>
    </div>
  )
}

export default FormContact