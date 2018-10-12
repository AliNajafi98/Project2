import React,{Component} from "react";

export default class Header extends Component{
  render(){
    return(
      <div className="Header">
          <h1 id="titel">{this.props.name}</h1>
      </div>
    );
  }
}
