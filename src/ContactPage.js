import React from "react";
import Toolbar from '../src/components/Navigation/Toolbar/Toolbar';
import Footertoolbar from '../src/components/Footer/FooterToolbar/FooterToolbar';
import Hero from '../src/components/Hero/Hero';

const initialState = {
  name: "",
  email: "",
  phonenumber: "",
  message: "",
  nameError: "",
  emailError: "",
  phonenumberError: "",
  messageError: "",
};

class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let phonenumberError = "";
    let messageError = "";

    if (!this.state.name) {
      nameError = "*name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "*invalid email";
    }
    if (!this.state.phonenumber) {
      phonenumberError = "*Phone number cannot be blank";
    }
    if (!this.state.message) {
      messageError = "* enter a message";
    }

    if (emailError || nameError || phonenumberError || messageError) {
      this.setState({ emailError, nameError, phonenumberError, messageError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      // clear form 
      this.setState(initialState);
    }
  };

  render() {
    return (

      <div className="ProductsContainer">
        <Toolbar />
        <Hero />
        <div>
          <section id="contact-form">
            <h1>Contact Us</h1>


            <form className="form" onSubmit={this.handleSubmit}>
              <div className="formAlignment">
                <p className="FormParagraphTag">Name</p>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />

                <div style={{ fontSize: 20, color: "yellow" }}>
                  {this.state.nameError}
                </div>
              </div>
              <div className="formAlignment">
                <p className="FormParagraphTag">Email Address</p>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />

                <div style={{ fontSize: 20, color: "yellow" }}>
                  {this.state.emailError}
                </div>
              </div>
              <div className="formAlignment">
                <p className="FormParagraphTag">Phone Number</p>
                <input
                  type="number"
                  name="phonenumber"
                  placeholder="Phone number"
                  value={this.state.phonenumber}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 20, color: "yellow" }}>
                  {this.state.phonenumberError}
                </div>

                <div>
                  <p className="FormParagraphTag">Message</p>
                  <textarea
                    name="message"
                    type="text"
                    placeholder="Message"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                  <div style={{ fontSize: 20, color: "yellow" }}>
                    {this.state.messageError}
                  </div>
                </div>
              </div>
              <button type="submit">submit</button>
            </form>
          </section>
        </div>
        <Footertoolbar />
      </div>
    );
  }
}

export default ValiationForm;