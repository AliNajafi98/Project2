import React,{Component} from "react";
import { Link } from 'react-router';
import Header from "./Header";
import axios from 'axios';
import{Request,AxiosProvider,Post} from 'react-axios';
 export default class SignUp extends Component{
  render(){
    return(
      <div>
        <Header name="Registration"/>
        <Forms/>
      </div>
    );
  }
}
class Forms extends Component{

 constructor(props){
   super(props)
   this.state= {
     username:''
     ,password:''
     ,email:''
   }
   //this.HandelOnChange = this.HandelOnChange.bind(this);E:

 }



  HandelSignUp(e){

    e.preventDefault();
    let Username = this.refs.username.value;
    let Pass = this.refs.pass.value;
    let Email =this.refs.email.value;
    axios({
      url:'http://localhost:8000/signupAuth/',
      mothod:'GET',
       data:{
        username:this.Username,
        pass:this.Pass,
        email:this.Email
       },
       headers: {
          "X-CSRFToken": window.CSRF_TOKEN,
          "content-type": "application/json"
                }

    }).then(respons =>{
      console.log(respons);
    })
    .catch(err =>{
      console.log(err);
    });

  }
  HandelOnChange(e){
    e.preventDefault();

  }
  // componentDidMount(){
  //
  // }
  render(){
    return(
      <div className="Form">
          <form  id="mainform" onSubmit={this.HandelSignUp.bind(this)}>
            <input className="username" id="username" placeholder="UserName"
                type="text" autoComplete="off" name="username" ref="username" onChange={this.HandelOnChange.bind(this)}/>
            <br/>
            <input className="email" id="email" placeholder="Email" type="email"
                name="email" ref="email" onChange={this.HandelOnChange.bind(this)} />
            <br/>
            <input className="pass" id="pass" placeholder="Password" type="text" name="password"
                autoComplete="off" ref="pass" onChange={this.HandelOnChange.bind(this)}/>
            <br/>
            <input id="btn" type="submit" value="Sign Up"  />
                <br/>
            <nav className="Links">
            <br/>
            <hr/>
            <br/>
              <Link className="normalLink" id="vistmypagelink" to="/Home">
                  Visit my page Without SignUp</Link>
            </nav>
          </form>
      </div>
    );

  }

  }
// class owinfo extends Component{
//   render(){
//     return(
//       <div>
//
//       </div>
//     );
//   }
// }
