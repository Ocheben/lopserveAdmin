/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { withStyles } from '@material-ui/core/styles';
import {
  InputAdornment, Menu, MenuItem, IconButton, CircularProgress
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  Content, Input, SText, StyledButton, AtIcon, LockIcon, SImg, PhoneIcon
} from '../../../components';
import logo from '../../../assets/img/logo.png';
import './Login.css';
import { APIS, request } from '../../../_services';
import { setAlert } from '../../../_store/actions';
import { login } from '../../../_store/actions/authActions';


export const Login = (props) => {
  const { dispatch, userInfo, history } = props;
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState({ flagCode: 'ng', countryCode: '+234' });
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userInfo.isLoggedIn) history.push('/vendors');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectCountry = (e) => {
    setCountry(e);
    setAnchorEl(null);
  };

  const submit = async () => {
    dispatch(login({ isLoggedin: true }));
    history.push('/vendors');
    // const { baseUrl, login: { method, path } } = APIS;
    // const url = `${baseUrl}${path}`;
    // const data = {
    //   email, password
    // };
    // setLoading(true);
    // const response = await request(method, url, data);
    // if (response.meta && response.meta.status === 200) {
    //   dispatch(login({ ...response.data, isLoggedin: true }));
    //   dispatch(setAlert({ open: true, variant: 'info', message: 'Welcome!' }));
    //   setLoading(false);
    //   history.push('/app');
    // } else if (response.meta && response.meta.status === 404) {
    //   dispatch(setAlert({ open: true, variant: 'error', message: 'Invalid email or password' }));
    // }
    // setLoading(false);
  };

  return (
    <Content
      height="100vh"
      mobHeight="100vh"
      bg="#e9e9e9"
      flex
      justify="center"
      align="center"
    >
      <Content borderR="0.5em" height="50%" width="25%" mobWidth="80%" bg="#fff" padding="2em" flex align="center" justify="space-evenly" mobJustify="space-evenly" mobHeight="50%">
        <Content justify="center" align="center" flex>
          <SImg maxWidth="50%" src={logo} alt="logo" />
        </Content>
        <Content width="90%" mobWidth="90%" bmargin="1.5em">
          <SText size="27px" weight="600" color="#444444" lineHeight={1.2}>Sign In</SText>
          <SText size="14px" weight="400" color="#999999">Sign in to your account</SText>
        </Content>
        <Content width="90%" mobWidth="90%" height="30%" mobHeight="30%" flex justify="space-around" mobJustify="space-around">
          <Input
            label="Phone"
            type="tel"
            variant="outlined"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon color="#666666" size="16px" />
                </InputAdornment>
              )
            }}
          />
          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="#666666" size="16px" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Content>
        <Content flex align="center" justify="center" height="20%" mobWidth="100%" mobHeight="20%">
          <StyledButton
            color="primary"
            width="80%"
            style={{ color: '#ffffff' }}
            variant="contained"
            onClick={submit}
          >
            {loading ? <CircularProgress style={{ color: '#ffffff' }} size={24} /> : 'Sign In '}
          </StyledButton>
        </Content>
        <StyledButton color="primary" width="auto" onClick={() => history.push('password')}>Forgot Password?</StyledButton>
      </Content>
    </Content>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo
});

export default connect(mapStateToProps)(Login);
