import React, { useState } from "react";
import Field from "../component/Field";

const Contact = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [errorfirst, seterrorfirst] = useState(false);
  const [errorlast, seterrorlast] = useState(false);
  const [erroremail, seterroremail] = useState(false);
  const [errorTextarea, seterrorTextarea] = useState(false);
  const [message, setmessage] = useState("");
  const handleSubmit = (e) => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      firstname.length === 0 &&
      lastname.length === 0 &&
      message.length === 0 &&
      !email.match(pattern)
    ) {
      seterrorfirst(true);
      e.preventDefault();
      seterrorlast(true);
      seterrorTextarea(true);
      seterroremail(true);
    } else if (lastname.length === 0) {
      seterrorlast(true);
      e.preventDefault();
    } else if (message.length === 0) {
      seterrorTextarea(true);
      e.preventDefault();
    } else if (firstname.length === 0) {
      seterrorfirst(true);
      e.preventDefault();
    } else if (!email.match(pattern)) {
      seterroremail(true);
      e.preventDefault();
    }
  };
  return (
    <div className="contactMeCont">
      <div className="contactHeader">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flexCus">
          <Field
            id="first_name"
            name="First name"
            placeholder="Enter your first name"
            type="text"
            setstate={(e) => setfirstname(e)}
            error="Your firstname must be greater than one Char."
            errorState={errorfirst}
          />
          <Field
            id="last_name"
            name="Last name"
            placeholder="Enter you r last name"
            type="text"
            setstate={(e) => setlastname(e)}
            error="Your lastname must be greater than one Char."
            errorState={errorlast}
          />
        </div>
        <Field
          id="email"
          name="Email"
          placeholder="yourname@email.com"
          type="email"
          setstate={(e) => setemail(e)}
          error="Please input a valid email"
          errorState={erroremail}
        />
        <div className="textareaSec">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            onChange={(e) => setmessage(e.target.value)}
          ></textarea>
          {errorTextarea && (
            <p className="errorMessage">
              Your message must be greater than one Char.
            </p>
          )}
        </div>
        <div className="agreeCon">
          <Field
            id="check_agree"
            type="checkbox"
            name="You agree to providing your data to {name} who may contact you."
          />
        </div>

        <button type="submit" id="btn__submit">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
