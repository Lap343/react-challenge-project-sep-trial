import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router';
import { SERVER_IP } from '../../../private';
import { login } from '../../../redux/features/auth';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  let history = useHistory();

  const tryLogin = (e) => {
    if(email !== '' && password !== ''){
      e.preventDefault();

      fetch(`${SERVER_IP}/api/login`, {
          method: 'POST',
          body: JSON.stringify({
              email,
              password
          }),
          headers: {
              'Content-Type': 'application/json'
          },
      }).then(response => response.json())
      .then(response => {
          if (response.success) {
            dispatch(login({ email: response.email, token: response.token }));
          }
      }).then(history.push("/view-orders"));
    }
  }

  const onChange = (key, val) => {
    if(key === "email"){
      setEmail(val);
    }else if(key === "password"){
      setPassword(val);
    }
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input 
          type="text" 
          className="form-control" 
          id="inputEmail" 
          placeholder="test@test.com" 
          value={email} 
          onChange={e => onChange('email', e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="inputPassword" 
          value={password} 
          onChange={e => onChange('password', e.target.value)}
        ></input>
      </div>
      <div className="d-flex justify-content-center">
          <button onClick={e => tryLogin(e)} type="submit" className="btn btn-primary">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;