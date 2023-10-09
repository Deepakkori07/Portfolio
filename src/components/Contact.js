import React,{useState} from "react";
import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";
import emailjs from '@emailjs/browser';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const emailSubmit = (e) => {
        e.preventDefault();
        const serviceId = 'service_z2ee2an';
        const templateId = 'template_z0y0w16';
        const publicKey = 'HTVkl42XR_pIRazGO';
        
        const templateParams = {
            from_name: name,
            from_email: email,
            to_email: 'Deepak Kori',
            message: text,
        };
        emailjs.send(serviceId,templateId,templateParams,publicKey)
        
        .then((response) => {
            console.log('Email send succesfull',response);
            toast("Email send successfull!");
            setName('');
            setEmail('');
            setText('');
        })
        .catch((error) =>  {
            console.log('email send failed',error);
            toast("Failed to send Email");
        });
        
    }
  return (
    <div className="background contact">
      <NavBar />
      <div className="belowSticky">
        <SocialLinks />
        <div>
            <h1 className="head">Contact</h1>
            <p style={{fontSize:'20px'}}>Submit the form below to get in touch with me</p>
        </div>
        <div className="container">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Enter your message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div >
            <button type="submit" class="btn btn-primary" onClick={emailSubmit} style={{justifyContent:'center',width:'100%'} }>SUBMIT</button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
