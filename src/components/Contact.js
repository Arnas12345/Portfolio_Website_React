import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import Particle from "./particles";
import "../CSS/Contact.css";

const SERVICE_ID = "service_9rx85ui";
const TEMPLATE_ID = "template_61hg5ya";
const USER_ID = "C_VG0e6y5DhZe3OQC";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="Page">
      <Particle />
      <div className="row Contact">
        <div style={{ marginTop: 70 }}>
          <h1 className="Intro2">Contact.</h1>
          <div className="AboutMeUnderline"></div>
          <div className="PDFHolder">
            <div className="app">
              <Form onSubmit={handleOnSubmit}>
                <Form.Field
                  id="form-input-control-email"
                  control={Input}
                  label="Your Email"
                  name="from_email"
                  placeholder="Email…"
                  required
                  icon="mail"
                  iconPosition="left"
                  className="contactFields"
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Your Name"
                  name="from_name"
                  placeholder="Name…"
                  required
                  icon="user circle"
                  iconPosition="left"
                />
                <Form.Field
                  id="form-textarea-control-opinion"
                  control={TextArea}
                  label="Your Message"
                  name="message"
                  placeholder="Message…"
                  required
                />
                <Button type="submit" color="green">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
