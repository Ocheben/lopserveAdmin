import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Fab, Icon, IconButton, Menu, MenuItem
} from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { Edit } from '@material-ui/icons';
import { SText, Content, colors, Input } from '../../components';
import DataTable from '../../components/Tables/DataTable';
import { orderList } from './mockData';
import ViewOrder from './ViewOrder';
// import AddOof from './AddOof';
// import DeleteDialog from './DeleteDialog';
import { setWorkTime, setWorkGroup, setLocation, setOof } from '../../_store/actions';


const groupColumns = [
  { columnName: '#', keyName: 'sn' },
  { columnName: 'User Name', keyName: 'userName' },
  { columnName: 'Vendor Name', keyName: 'vendorName' },
  { columnName: 'Gas Volume', keyName: 'gas' },
  { columnName: 'Cylinder Size', keyName: 'cylinder' },
  { columnName: 'Price', keyName: 'price' },
  { columnName: 'Status', keyName: 'status' },
  { columnName: 'View', keyName: 'view' },
];

const statusColors = ['#ff1744', colors.primary, '#1b5e20'];
const statusMessages = ['Queued', 'In Progress', 'Delivered'];

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

  const ordersList = orderList.map((item, index) => ({
    ...item,
    sn: index + 1,
    status: (
      <SText size="18px" weight="600" color={statusColors[item.status]}>
        {statusMessages[item.status]}
      </SText>
    ),
    view: (
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
            <SText color="#444444" size="32px" weight="700">Orders</SText>
            <Fab color="primary" aria-label="edit" style={{ color: '#ffffff' }}>
              <Icon>filter_list</Icon>
            </Fab>
          </Content>
          <DataTable height="70vh" tableData={ordersList} columns={groupColumns} loading={false} />
        </Content>
      </Content>
      <ViewOrder open={openView} handleClose={() => closeViewDialog()} oofId={oofId} oofName={oofName} />
      {/* <DeleteDialog open={openDel} handleClose={() => closeEditDialog()} oofId={oofId} oofName={oofName} submit={() => getOof()} /> */}
    </>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData,
});

export default connect(mapStateToProps)(Vendors);
