import "../styles/Contact.scss";
import people from "../assets/cheersTwoPeep.jpg";
import bg from "../assets/bg.jpg";


function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-top">
          <h1>Send me a message!</h1>
          <p>
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <div className="contact-bottom">


            <div className="left">
                <img src={people} alt="people" width={450} srcset="" />
            </div>
          <form>
            <img className="form-bg" src={bg} alt="" />
            <h3>Write a message</h3>
            <div className="name-email">
           <div className="name-div">
           <label htmlFor="name">Your Name</label> <br />
              <input type="text" placeholder="Enter your good name" />
           </div>
             <div className="email-div">
             <label htmlFor="email">Your Email</label> <br />
              <input type="email" placeholder="Enter your email address" />
             </div>
            </div>
            <div className="msg">
              <label htmlFor="message">Your Message</label> <br />
              <textarea name="message" id="msg" placeholder="Say, Hello!"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
