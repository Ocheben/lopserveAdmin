import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { InputAdornment, CircularProgress, Collapse, Icon } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {
  Content, Input, ClockIcon, TimeInput, StyledButton, SText, colors, SImg
} from '../../components';
import { APIS, requestJwt } from '../../_services';
import { setAlert } from '../../_store/actions';
import idImage from '../../assets/img/id.jpg'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {
    children, classes, onClose, ...other
  } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const ViewVendor = (props) => {
  const {
    open, handleClose, locationId, locationName, userInfo, userData, submit, oofId, dispatch
  } = props;
  const { oof } = userData;
  const [loading, setLoading] = useState(false);
  const [openId, setOpenId] = useState(false)
  const [formInputs, setFormInputs] = useState({
    punishable: false
  });

  // useEffect(() => {
  //   const selected = oof.find(e => e.id === oofId);
  //   if (selected === undefined) {
  //     setFormInputs({ punishable: false });
  //     return;
  //   }
  //   const newInputs = {
  //     id: selected.id,
  //     reason: selected.reason,
  //     description: selected.description,
  //     punishable: selected.punishable
  //   };
  //   setFormInputs(newInputs);
  // }, [oofId, oof]);

  const handleSubmit = async () => {
    setLoading(true);
    const { baseUrl, getOutOfOffice: { path } } = APIS;
    const url = `${baseUrl}${path}`;
    const method = oofId === null ? 'POST' : 'PUT';
    // const data = oofId === null ? formInputs : { name, id: locationId };
    const response = await requestJwt(method, url, formInputs, userInfo.jwt);
    if (response.meta && response.meta.status === 200) {
      submit();
      handleClose();
      dispatch(setAlert({ open: true, variant: 'info', message: `You have successfuly ${oofId === null ? 'added' : 'edited'} out of office reason` }));
    } else if (response.meta && response.meta.status === 500) {
      dispatch(setAlert({ open: true, variant: 'error', message: 'Something went wrong' }));
    } else {
      dispatch(setAlert({ open: true, variant: 'error', message: 'Unable to connect' }));
    }
    setLoading(false);
  };

  const actionName = oofId === null ? 'Add ' : 'Edit ';
  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth maxWidth="sm">
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <SText color="#444444" size="25px" weight="700">
          View Vendor
        </SText>
      </DialogTitle>
      <DialogContent dividers>
        <Content flex justify="center" align="center">
          <Content vmargin="0.5em" width="90%">
            <SText color={colors.four} size="14px" weight="700">Name</SText>
            <SText color={colors.four} size="20px">Onoja Oche</SText>
          </Content>
          <Content flex horizontal justify="space-between" width="90%" vmargin="0.5em">
            <Content>
              <SText color={colors.four} size="14px" weight="700">Phone</SText>
              <SText color={colors.four} size="20px">08034846400</SText>
            </Content>
            <Content>
              <SText color={colors.four} size="14px" weight="700">Email</SText>
              <SText color={colors.four} size="20px">ocheben@gmail.com</SText>
            </Content>
          </Content>
          <Content vmargin="0.5em" width="90%">
            <SText color={colors.four} size="14px" weight="700">Location</SText>
            <SText color={colors.four} size="20px">Jabi Lake Mall, Jabi, Abuja</SText>
          </Content>
          <Content vmargin="0.5em" width="90%">
            <StyledButton width="auto" onClick={() => setOpenId(prev => !prev)} endIcon={<Icon>{openId ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</Icon>}><SText color={colors.four} size="14px" weight="700">View ID</SText></StyledButton>
          </Content>
        </Content>
        <Collapse in={openId}>
          <Content flex align="center">
            <Content height="40vh" width="auto">
              <SImg src={idImage} />
            </Content>
          </Content>
        </Collapse>
        <Content flex horizontal align="flex-end" vmargin="2em" justify="flex-end" height="20%" mobWidth="100%" mobHeight="20%">
          <StyledButton
            width="7em"
            style={{ color: '#ffffff', marginRight: '0.5em' }}
            variant="contained"
            onClick={handleSubmit}
          >
            {loading ? <CircularProgress style={{ color: '#ffffff' }} size={24} /> : <SText color="#ffffff" size="14px" weight="700">Delete</SText>}

          </StyledButton>
          <StyledButton
            color="secondary"
            width="7em"
            style={{ color: '#ffffff' }}
            variant="contained"
            onClick={handleSubmit}
          >
            {loading ? <CircularProgress style={{ color: '#ffffff' }} size={24} /> : <SText color="#ffffff" size="14px" weight="700">Verify</SText>}

          </StyledButton>
        </Content>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(ViewVendor);
