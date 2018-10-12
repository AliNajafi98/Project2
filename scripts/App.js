
import React,{Component} from "react";
import React_dom from 'react-dom';
import Header from "./Header";
import FormBox from "./FormBox";

export default class App extends Component{
  render(){
    return(
      <div className="MainApp">
        <Header name="Login Page"/>
        <FormBox/>
        
      </div>
    );
  }
}

React_dom.render(<App/>,document.getElementById('app'));
