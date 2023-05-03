import './Navbar.css'
import { Component } from 'react'
class Navbar extends Component{
  state={clicked: false}
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }

  render(){

  return(
    <>
    <nav>
      <img src="https://github.com/NaN-Goats/Eco-ProPit/blob/main/logo.png?raw=true" alt='logo'></img>
      <div>
        <ul id='Navbar' className={this.state.clicked ? "#Navbar active" : "#Navbar"}>
          <li><a href='index.html'>What's New?</a></li>
          <li><a href='index.html'>Shop</a></li>
          <li><a href='index.html'>About Us</a></li>
          <li><a href='index.html'>Contact</a></li>
          <li><a href='index.html'>Account</a></li>
        </ul>
      </div>
      <div id="mobile" onClick={this.handleClick}> 
      <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
    </>
  )
}
}
export default Navbar