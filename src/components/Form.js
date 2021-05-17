import React, { useEffect, useState } from 'react';
import './Form.scss';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const[emailDirty, setEmailDirty] = useState(false);
  const[passwordDirty, setPasswordDirty] = useState(false);

  const[emailError, setEmailError] = useState('Email is required');
  const[passwordError, setPasswordError] = useState('Password is required');

  const[formValid, setFormValid] = useState(false);

  const emailHandler = (event) => {
    setEmail(event.target.value);

    const emailValidationRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailValidationRegExp.test(String(event.target.value).toLowerCase())) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value);

    const passwordValidationRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    if (!passwordValidationRegExp.test(String(event.target.value))) {
      setPasswordError('Invalid password');
    } else {
      setPasswordError('')
    }
  }

  const blurHandler = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  }

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError]);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    alert('Log in...');
  }
  
  return (
    <form
      className="form"
      method="POST"
      action="/#"
    >
      <input
        className={
          (emailDirty && emailError)
          ? "form__input form__input--error input"
          : "form__input input"}
        type="email"
        placeholder="Email"
        name="email"
        onBlur={event => blurHandler(event)}
        onChange={event => emailHandler(event)}
      />
      {(emailDirty && emailError) && <div className="form__error">{emailError}</div>}

      <input
        className={
          (passwordDirty && passwordError)
          ? "form__input form__input--error input" 
          : "form__input input"
        }
        type="password"
        placeholder="Password"
        name="password"
        onBlur={event => blurHandler(event)}
        onChange={event => passwordHandler(event)}
      />
      {(passwordDirty && passwordError) && <div className="form__error">{passwordError}</div>}

      <a className="form__link link" href="/#">
        Forgot password?
      </a>

      <label className="form__remember remember">
        Remember me
        <input
          className="checkbox"
          type="checkbox"
          htmlFor="remember"
        />
        <span className="fakeCheckbox"></span>
      </label>

      <button
        type="submit"
        className="form__button button"
        disabled={!formValid}
        onClick={event => onSubmitHandler(event)}
      >
        Continue
      </button>
    </form>
  );
}

export default Form;