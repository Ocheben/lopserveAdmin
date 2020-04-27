import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Fab, Icon, IconButton, Menu, MenuItem
} from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { Edit } from '@material-ui/icons';
import { SText, Content, Input } from '../../components';
import DataTable from '../../components/Tables/DataTable';
import { vendorList } from './mockData';
import ViewVendor from './ViewVendor'
// import AddOof from './AddOof';
// import DeleteDialog from './DeleteDialog';
import { setWorkTime, setWorkGroup, setLocation, setOof } from '../../_store/actions';


const groupColumns = [
  { columnName: '#', keyName: 'sn' },
  { columnName: 'Name', keyName: 'name' },
  { columnName: 'Location', keyName: 'location' },
  { columnName: 'Phone', keyName: 'phone' },
  { columnName: 'Actions', keyName: 'actions' },
];

const Vendors = (props) => {
  const { dispatch, userInfo, userData: { loading, oof } } = props;
  const [isEdit, setEdit] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [oofId, setOofId] = useState(null);
  const [oofName, setOofName] = useState('');
  const [oofAnchorArr, setOofAnchorArr] = useState(new Array(oof.length).fill(null));
  const [openDel, setOpenDel] = useState(false);
  const [delType, setDelType] = useState('');

  // useEffect(() => {
  //   getOof();
  // }, []);
  // useEffect(() => {
  //   setOofAnchorArr(new Array(oof.length).fill(null));
  // }, [oof]);

  // const getOof = async () => {
  //   await dispatch(setOof(userInfo.jwt));
  // };

  // const setOofItem = (i, value) => {
  //   const newArr = oofAnchorArr.map((item, index) => (index === i ? value : item));
  //   setOofAnchorArr(newArr);
  // };

  // const openDelete = (idx, id, name) => {
  //   setOpenDel(true);
  //   setOofId(id);
  //   setOofName(name);
  //   setOofItem(idx, null);
  // };

  // const openEdit = (id, name, index) => {
  //   setOofId(id);
  //   setOofName(name);
  //   setOpenGroup(true);
  //   setOofItem(index, null);
  // };

  const vendorsList = vendorList.map((item, index) => ({
    ...item,
    sn: index + 1,
    actions: (
      <>
        <IconButton size="small" onClick={() => setOpenView(true)}><Icon>info_outline</Icon></IconButton>
      </>
    )
  }));

  const closeViewDialog = () => {
    setOpenView(false);
    setOpenDel(false);
    setOofName('');
    setTimeout(setOofId(null), 2000);
  };

  return (
    <>
      <Content fadeIn minHeight="70vh" flex align="center" justify="center">
        <Content id="worktime" width="90%" bg="#ffffff" borderBox vmargin="2em" shadow borderR="0.4em">
          <Content flex horizontal padding="2em" justify="space-between" borderBox>
            <SText color="#444444" size="32px" weight="700">Vendors</SText>
            <Fab color="primary" aria-label="edit" style={{ color: '#ffffff' }}>
              <Icon>filter_list</Icon>
            </Fab>
          </Content>
          <DataTable height="70vh" tableData={vendorsList} columns={groupColumns} loading={false} />
        </Content>
      </Content>
      <ViewVendor open={openView} handleClose={() => closeViewDialog()} oofId={oofId} oofName={oofName} />
      {/* <DeleteDialog open={openDel} handleClose={() => closeEditDialog()} oofId={oofId} oofName={oofName} submit={() => getOof()} /> */}
    </>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(Vendors);
