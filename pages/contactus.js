import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import { useState } from "react";
const contactus = () => {

  const [firstName, setFirstname] = useState('')
  const [mailId, setMailId] = useState('')
  const [textData, setTextData] = useState('')


  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  }

  const handleMail = (e) => {
    setMailId(e.target.value);
  }

  const handleText = (e) => {
    setTextData(e.target.value)
  }

  const handleSubmit = () => {
    console.log("Fistname:", firstName);
    console.log("EmailId:", mailId);
    console.log('TextData:', textData)

  }



  return (




    <div className='body'>

      <div className="formm" >
        <svg viewBox="0 0 121 33" fill="none" className="hello">
          <path d="M27.45 2.6V32h-6.804V19.946H7.28999V32H.485992V2.6H7.28999v11.592H20.646V2.6h6.804zM56.0779 20.786c0 .084-.042.672-.126 1.764h-17.094c.308 1.4 1.036 2.506 2.184 3.318 1.148.812 2.576 1.218 4.284 1.218 1.176 0 2.212-.168 3.108-.504.924-.364 1.778-.924 2.562-1.68l3.486 3.78c-2.128 2.436-5.236 3.654-9.324 3.654-2.548 0-4.802-.49-6.762-1.47-1.96-1.008-3.472-2.394-4.536-4.158-1.064-1.764-1.596-3.766-1.596-6.006 0-2.212.518-4.2 1.554-5.964 1.064-1.792 2.506-3.178 4.326-4.158 1.848-1.008 3.906-1.512 6.174-1.512 2.212 0 4.214.476 6.006 1.428 1.792.952 3.192 2.324 4.2 4.116 1.036 1.764 1.554 3.822 1.554 6.174zm-11.718-6.762c-1.484 0-2.73.42-3.738 1.26-1.008.84-1.624 1.988-1.848 3.444h11.13c-.224-1.428-.84-2.562-1.848-3.402-1.008-.868-2.24-1.302-3.696-1.302zM60.44.835999h6.552V32H60.44V.835999zM73.0728.835999h6.552V32h-6.552V.835999zM96.4576 32.336c-2.38 0-4.522-.49-6.426-1.47-1.876-1.008-3.346-2.394-4.41-4.158-1.064-1.764-1.596-3.766-1.596-6.006s.532-4.242 1.596-6.006c1.064-1.764 2.534-3.136 4.41-4.116 1.904-1.008 4.046-1.512 6.426-1.512s4.5084.504 6.3844 1.512c1.876.98 3.346 2.352 4.41 4.116 1.064 1.764 1.596 3.766 1.596 6.006s-.532 4.242-1.596 6.006c-1.064 1.764-2.534 3.15-4.41 4.158-1.876.98-4.0044 1.47-6.3844 1.47zm0-5.376c1.68 0 3.052-.56 4.1164-1.68 1.092-1.148 1.638-2.674 1.638-4.578 0-1.904-.546-3.416-1.638-4.536-1.0644-1.148-2.4364-1.722-4.1164-1.722-1.68 0-3.066.574-4.158 1.722-1.092 1.12-1.638 2.632-1.638 4.536 0 1.904.546 3.43 1.638 4.578 1.092 1.12 2.478 1.68 4.158 1.68zM112.387 2.6h7.812l-1.302 19.194h-5.208L112.387 2.6zm3.906 29.736c-1.148 0-2.114-.364-2.898-1.092-.756-.756-1.134-1.666-1.134-2.73s.378-1.946 1.134-2.646c.756-.728 1.722-1.092 2.898-1.092 1.176 0 2.142.364 2.898 1.092.756.7 1.134 1.582 1.134 2.646 0 1.064-.392 1.974-1.176 2.73-.756.728-1.708 1.092-2.856 1.092z" fill="#fff" />
        </svg>
        <div className="paragraph">
          <h1>  Please contact us here: </h1>
        </div>


        <div className="form-group">
          <label  >Name </label>
          <input type="name" name="name" className="form-input" onChange={handleFirstname} required placeholder="First and Last name" />
        </div>
        <div className="form-group">
          <label for="email">E-mail:</label>

          <input type="email" name="e-mail" className="form-input" onChange={handleMail} required placeholder="Ex.: youremail@email.com" />
        </div>
        <div className="form-group">
          <label for="textarea">Message:</label>

          <textarea className="form-input" name="message" onChange={handleText} placeholder="I'm glad to answer any questions :)"></textarea>
        </div>

        <div className="form-group">
          <button className="subbt" type='submit' onClick={handleSubmit} >Submit</button>
        </div>




      </div>
      <Footer />
    </div>







































    // <div className={styles.container}>
    //   <Head>
    //     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    //   </Head>
    //   <div>
    //     <div className="row">
    //       <form className="col s12">
    //         <div className="row">
    //           <div className="input-field col s6">
    //             <input id="first_name" type="text" className="validate" />
    //             <label id="labl" for="first_name">First Name</label>
    //           </div>
    //           <div className="input-field col s6">
    //             <input id="last_name" type="text" className="validate" />
    //             <label id="labl" for="last_name">Last Name</label>
    //           </div>
    //         </div>

    //         <div className="row">
    //           <div className="input-field col s12">
    //             <input id="password" type="password" className="validate" />
    //             <label id="labl" for="password">Password</label>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="input-field col s12">
    //             <input id="email" type="email" className="validate" />
    //             <label id="labl" for="email">Email</label>
    //           </div>
    //         </div><div className="row">
    //           <div className="input-field col s12">
    //             <input id="text" type="text" className="validate" />
    //             <label id="labl" for="text">Query</label>
    //           </div>
    //         </div>

    //       </form>
    //     </div>

    //     <Footer />
    //   </div>
    // </div>



  )
}

export default contactus;