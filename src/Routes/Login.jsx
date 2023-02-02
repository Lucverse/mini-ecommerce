import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const handleChange = (event) => {
    event.preventDefault();
    setUser({
      ...user, [event.target.name]: event.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user)
      });
      let data = await res.json();
      loginUser(data.token);
      navigate('/dashboard');
      // console.log(data);
      // console.log(user);
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" name="email" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
