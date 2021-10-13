import React, { Component } from "react";
import generatepwd from './generatepwd.js';

class Password extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "Michael",
      length: 0,
      lowercase: false,
      uppercase: false,
      number: false,
      specialcharacter: false
    };
  }
  
  updateLength = (e) => {
    this.setState({length: e.target.value})
  }

  updateChoices = (e) => {
    if (e.target.value === 'lowercase'){
    this.setState(
      prevState => ({lowercase: !(prevState.lowercase)})
    )
    }
    else if (e.target.value === 'uppercase'){
    this.setState(
      prevState => ({uppercase: !(prevState.uppercase)})
    )
    }
    else if (e.target.value === 'number'){
    this.setState(
      prevState => ({number: !(prevState.number)})
    )
    }
    else if (e.target.value === 'specialcharacter'){
    this.setState(
      prevState => ({specialcharacter: !(prevState.specialcharacter)})
    )
    }
  }
  generator = () => {
    let {length, lowercase, uppercase, number, specialcharacter} = this.state
    this.setState({
      password: generatepwd(length, lowercase, uppercase, number, specialcharacter)
    })
    console.log(this.state.password.length)
  }

  render() {
    return (
      <>
        <h1>{this.state.password}</h1>
        Enter length of password (8-19)
        <input id='length' type='number' min='8' max='19' onChange={this.updateLength}/> <br />
        <input type='checkbox' id='lowercase' name='lowercase' value= 'lowercase' onChange={this.updateChoices}/>
        <label htmlFor='lowercase'>Lowercase letters</label>
        <input type='checkbox' id='uppercase' name='uppercase' value='uppercase' onChange={this.updateChoices}/>
        <label htmlFor='uppercase'>Uppercase letters</label>

        <input type='checkbox' id='number' name='number' value='number' onChange={this.updateChoices}/>
        <label htmlFor='number'>Numbers</label>

        <input type='checkbox' id='specialcharacter' name='specialcharacter' value='specialcharacter' onChange={this.updateChoices}/>
        <label htmlFor='specialcharacter'>Special characters</label>
        <br />
        <button onClick={this.generator}>Generate</button>
      </>

    );
  }
}

export default Password;
