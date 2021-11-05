import React, { Component } from "react";
import generatepwd from "./generatepwd.js";
import passwordChecker from "zxcvbn";
import {
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaRegClipboard,
} from "react-icons/fa";
import { AiOutlineMinusCircle } from "react-icons/ai";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
class Password extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "Pasord is generated Here",
      length: 10,
      lowercase: false,
      uppercase: false,
      number: false,
      specialcharacter: false,
      passwordStrength: "",
      colorSig: "",
      icon: "",
    };
  }

  updateLength = (e) => {
    this.setState({ length: e.target.value });
  };

  updateChoices = (e) => {
    this.setState((prevState) => ({
      [e.target.name]: !prevState[e.target.name],
    }));
  };
  generator = () => {
    let { length, lowercase, uppercase, number, specialcharacter } = this.state;

    this.setState({
      password: generatepwd(
        length,
        lowercase,
        uppercase,
        number,
        specialcharacter
      ),
    });
  };

  copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(this.state.password);
    toast.success("Copied to clipboard", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      closeButton: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const i = {
      0: "Very weak",
      1: "Weak",
      2: "Okay",
      3: "Strong",
      4: "Very strong",
    };
    const iconComponents = {
      0: <FaRegTimesCircle color="hsl(0, 100%, 29%)" size="25px" />,
      1: <FaRegTimesCircle color="hsl(0, 100%, 50%)" size="25px" />,
      2: <AiOutlineMinusCircle color="hsl(39, 97%, 42%)" size="25px" />,
      3: <FaRegCheckCircle color="hsl(120, 100%, 31%)" size="25px" />,
      4: <FaRegCheckCircle color="hsl(120, 93%, 16%)" size="25px" />,
    };
    if (
      prevState.password !== this.state.password &&
      this.state.password.length !== 0
    ) {
      this.setState({
        colorSig: i[passwordChecker(this.state.password).score].replace(
          " ",
          "-"
        ),
        passwordStrength: i[passwordChecker(this.state.password).score],
        icon: iconComponents[passwordChecker(this.state.password).score],
      });
    }
  }

  render() {
    return (
      <>
        <div className="pwd-and-copy">
          <h1
            className={
              this.state.password === "Password is generated Here"
                ? "password-template"
                : "generated-password"
            }
          >
            {this.state.password}
          </h1>
          {this.state.password &&
            this.state.password !== "Password is generated Here" && (
              <button className="copy-button" onClick={this.copyToClipboard}>
                <FaRegClipboard size="25px" />
              </button>
            )}
        </div>
        <div className='enter-len'>
        Enter length of password:{" "}
        <input
          id="length"
          type="number"
          value={this.state.length}
          onChange={this.updateLength}
        />
        </div>
        <br />
        <span className="check-and-label">
          <input
            type="checkbox"
            id="lowercase"
            name="lowercase"
            value="lowercase"
            onChange={this.updateChoices}
          />
          <label htmlFor="lowercase">Lowercase letters</label>
        </span>
        <span className="check-and-label">
          <input
            type="checkbox"
            id="uppercase"
            name="uppercase"
            value="uppercase"
            onChange={this.updateChoices}
          />
          <label htmlFor="uppercase">Uppercase letters</label>
        </span>
        <span className="check-and-label">
          <input
            type="checkbox"
            id="number"
            name="number"
            value="number"
            onChange={this.updateChoices}
          />
          <label htmlFor="number">Numbers</label>{" "}
        </span>
        <span className="check-and-label">
          <input
            type="checkbox"
            id="specialcharacter"
            name="specialcharacter"
            value="specialcharacter"
            onChange={this.updateChoices}
          />
          <label htmlFor="specialcharacter">Special characters</label>
        </span>
        <br />
        <button className="button-generator" onClick={this.generator}>
          Generate
        </button>
        <div className="pwd-strength">
          <h3>
            Password Strength:{" "}
            {this.state.password && <span className={this.state.colorSig}>
              {this.state.passwordStrength}
            </span>}
          </h3>{" "}
          {this.state.password && <span className="icon">{this.state.icon}</span>}
        </div>
      </>
    );
  }
}

export default Password;
