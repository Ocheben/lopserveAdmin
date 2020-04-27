/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Redirect, Route, Switch, } from 'react-router-dom';
import { connect } from 'react-redux';
import Media from 'react-media';
import routes from '../../routes';
import DefaultSidebar from './DefaultSidebar';
import DefaultHeader from './DefaultHeader';
import { styles } from '../../assets/styles/style';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { Content } from '../../components';

const DefaultLayout = (props) => {
  const { classes, userInfo, history } = props;
  const initialState = {
    drawerOpen: false,
    sidebarFixed: false,
    isMobile: ''
  };
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    if (!userInfo.isLoggedIn) history.push('/login');
  }, []);

  // componentDidMount() {
  //   if (!this.props.userInfo.isLoggedin) {
  //     this.props.history.push('/login');
  //   }
  // }

  const fixSidebar = () => {
    setstate(s => ({ ...s, sidebarFixed: !s.sidebarFixed }));
  };

  const handleDrawerOpen = () => {
    setstate(s => ({ ...s, drawerOpen: true }));
  };

  const handleDrawerClose = () => {
    setstate(s => ({ ...s, drawerOpen: false }));
  };
  const { drawerOpen, sidebarFixed, isMobile } = state;

  return (
    <div className={classes.root}>
      <Media query="(max-width: 992px)" onChange={matches => setstate(s => ({ ...s, isMobile: matches }))} />
      <CssBaseline />
      {userInfo.role === 'admin' && <DefaultSidebar handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={drawerOpen} fixSidebar={fixSidebar} />}
      <DefaultHeader
        handleDrawerOpen={handleDrawerOpen}
        open={drawerOpen}
        sidebarFixed={sidebarFixed}
      />
      <div
        className={classNames(classes.container, {
          [classes.contentShift]: sidebarFixed,
          [classes.content]: !isMobile,
          [classes.mobileContent]: isMobile ? true : userInfo.role !== 'admin',
        })}
          //    className={classes.content}
      >
        <Content flex align="center">
          <Content width="100%">
            <BreadCrumbs />
          </Content>
        </Content>
        <Switch>
          {routes.map(route => (route.component ? (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={prop => (
                <route.component {...prop} />
              )}
            />
          ) : (null)))}
          {
            <Redirect from="/" to="/vendors" />
          }
        </Switch>
      </div>
    </div>

  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo
});

export default connect(mapStateToProps)(withStyles(styles)(DefaultLayout));
