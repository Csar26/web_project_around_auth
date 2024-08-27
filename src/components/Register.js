import React from 'react';
import { Link } from 'react-router-dom';
import './styles/register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.password ) {
      auth.register(this.state.username, this.state.password, this.state.email).then((res) => {
        if(res) {
          this.setState({message:""}, () => {
this.props.history.push("/login");
          })
        }
      });
    }
   
  }

  render() {
    return (
      <div className="register">
        <p className="register__welcome">
          Por favor, regístrate.
        </p>
        <form onSubmit={this.handleSubmit} className="register__form">
          <label htmlFor="email">
            Correo Electrónico:
          </label>
          <input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          <label htmlFor="password">
            Contraseña:
          </label>
          <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <div className="register__button-container">
            <button type="submit" onSubmit={this.handleSubmit} className="register__link">Iniciar sesión</button>
          </div>
        </form>
        <div className="register__signin">
          <p>¿Ya tienes una cuenta?</p>
          <Link to="login" className="register__login-link">Inicia sesión aquí</Link>
        </div>
      </div>
    );
  }
}

export default Register;