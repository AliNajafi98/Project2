import React,{Component} from "react";
import { Link } from 'react-router';

export default class FormBox extends Component{

    constructor(props){
      super(props);
      this.state={};

    }
    HandelSignIn(e){
      e.preventDefault();

    }
  render(){
    return(
      <div className="Form">

          <form id="mainform" onSubmit={this.HandelSignIn.bind(this)}>
            <input className="username" placeholder="UserName" type="text" autoComplete="off" ref="name" required/>
            <div className="warningText">

            </div>
            <br/>
            <input className="pass" placeholder="Password" type="text" autoComplete="off" ref="pass" required/>
            <div className="warningText">

            </div>
            <br/>
            <input id="btn" type="submit" value="Sign in" /><br/>
            <nav id="Links">
            <a className="normalLink" href="">Forgot your Password?</a>
            <br/>
            <br/>
            <Link className="normalLink" to="/SignUp">Creat New Account</Link>
            </nav>
            <br/>
          </form>
      </div>
    );
  }
}
