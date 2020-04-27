import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Media from 'react-media';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { AccessAlarm } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import NotesIcon from '@material-ui/icons/Notes';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {
  Icon, CssBaseline, List, ListItem, ListItemIcon, ListItemText, Drawer, IconButton, Collapse
} from '@material-ui/core';
import { styles } from '../../assets/styles/style';
import {
  SettingsIcon, DashboardIcon, ClockIcon, LocationIcon, EmployeeIcon, VacationIcon, AbsenteeIcon, ReportIcon, CheckListIcon, PercentIcon, Content, CorporationIcon, DataCaptureIcon, StudentIcon, FamilyIcon
} from '../../components';
import { updateBreadcrumb } from '../../_store/actions/userActions';

const DefaultSidebar = (props) => {
  const {
    history, fixSidebar, handleDrawerClose, handleDrawerOpen, classes, open, location, userInfo, dispatch
  } = props;
  const menuList = [
    {
      name: 'Vendors', parent: null, icon: <EmployeeIcon color="#ffffff" size={24} />, link: '/vendors'
    },
    {
      name: 'Orders', parent: null, icon: <ReportIcon color="#ffffff" size={24} />, link: '/orders'
    }
  ];
  const initialState = {
    open: false,
    isMobile: '',
    sidebarFixed: false,
    openNest: '',
    prevNest: '',
  };
  const [state, setstate] = useState(initialState);

  // const handleLogout = () => {
  //   // dispatch(removeUser());
  //   history.push('/login');
  // };

  const toggleSidebar = () => {
    setstate(s => ({ ...s, sidebarFixed: !s.sidebarFixed }));
    fixSidebar();
  };

  const onMouseLeave = () => {
    setstate(s => ({
      ...s,
      openNest: '',
      prevNest: s.openNest
    }));
    handleDrawerClose();
  };

  const onMouseEnter = () => {
    setstate(s => ({ ...s, openNest: s.prevNest }));
    handleDrawerOpen();
  };

  const handleClick = (item, index) => {
    if (item.children && state.openNest === index) {
      setstate(s => ({ ...s, openNest: '' }));
    } else if (item.children) {
      setstate(s => ({ ...s, openNest: index }));
    } else {
      history.push(item.link);
      dispatch(updateBreadcrumb({ parent: item.parent || null, child: item.name || null }));
      // eslint-disable-next-line no-unused-expressions
      isMobile && handleDrawerClose();
    }
  };

  const { isMobile, sidebarFixed, openNest } = state;

  return (
    <div className={classes.root}>
      <Media
        query="(max-width: 992px)"
        onChange={matches => setstate(s => ({ ...s, isMobile: matches }))
        }
      />
      <CssBaseline />
      <Drawer
        anchor="left"
        open={open}
        onMouseEnter={!sidebarFixed ? onMouseEnter : undefined}
        onMouseLeave={!sidebarFixed ? onMouseLeave : undefined}
        variant={isMobile ? 'temporary' : 'permanent'}
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: classNames(classes.drawerPaper, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.drawerToggle}>
          {
            isMobile
              ? (
                <IconButton onClick={handleDrawerClose} style={{ color: '#fff' }}>
                  <Icon>close</Icon>
                </IconButton>
              )
              : (
                <IconButton onClick={toggleSidebar} style={{ color: '#fff' }}>
                  {sidebarFixed ? <NotesIcon color="inherit" /> : <MenuIcon color="inherit" />}
                </IconButton>
              )
          }

        </div>
        <List>
          {menuList.map((item, index) => (
            <>
              <ListItem
                key={item.link}
                button
                onClick={() => handleClick(item, index)}
                selected={location.pathname === item.link}
              >
                <Content flex horizontal justify="space-between">
                  <ListItemIcon style={{ color: '#fff', margin: 0 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} style={{ width: '80%' }} />
                  {
                    item.children
                    && open
                    && (
                    <ListItemIcon className="collapseIcon" style={{ color: '#ffffff', float: 'right', width: 'auto' }}>
                      {openNest === index ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    )
                  }
                </Content>
              </ListItem>
              <Collapse in={openNest === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {
                item.children && item.children.map((childItem, idx) => (
                  <ListItem
                    key={childItem.link}
                    button
                    className={classes.nested}
                    onClick={() => handleClick(childItem, idx)}
                    selected={location.pathname === childItem.link}
                  >
                    <ListItemIcon style={{ color: '#fff', margin: 0 }}>{childItem.icon}</ListItemIcon>
                    {
                      <ListItemText
                        primary={childItem.name}
                        classes={{ primary: classes.sidebarText }}
                      />
                    }
                  </ListItem>
                ))
              }
                </List>
              </Collapse>
            </>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo
});

// eslint-disable-next-line max-len
export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(DefaultSidebar)));
