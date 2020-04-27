/* eslint-disable import/prefer-default-export */
import { USERCONSTANTS } from '../constants';
import { requestJwt, APIS } from '../../_services';

const {
  SET_DASHBOARD, SET_LOADING, SET_PERCENT, SET_PARAMS, SET_WORKTIME, SET_WORKGROUP, SET_LOCATION, SET_EMPLOYEES, SET_OOF, SET_ABSENTEES, SET_REPORT, SET_MONTH, SET_YEAR, SET_ALERT, SET_STUDENTS, SET_GUARDIANS, SET_MAPDATA, SET_SUB, SET_EMPLOYEE_TYPE, SET_WARDS, COMP_LOAD, SET_TERMINALS, SET_ALL_EMPLOYEES, UPDATE_BREADCRUMB, SET_CALLOUT
} = USERCONSTANTS;

const setLoading = action => ({
  type: SET_LOADING,
  payload: action
});

const setDash = payload => ({
  type: SET_DASHBOARD,
  payload
});

const setPercentAction = payload => ({
  type: SET_PERCENT,
  payload
});

const setParamsAction = payload => ({
  type: SET_PARAMS,
  payload
});

const setWorkTimeAction = payload => ({
  type: SET_WORKTIME,
  payload
});

const setWorkGroupAction = payload => ({
  type: SET_WORKGROUP,
  payload
});

const setLocationAction = payload => ({
  type: SET_LOCATION,
  payload
});

const setEmployeesAction = payload => ({
  type: SET_EMPLOYEES,
  payload
});

const setOofAction = payload => ({
  type: SET_OOF,
  payload
});

const actionCreator = (type, payload) => ({ type, payload });

export const setAlert = payload => actionCreator(SET_ALERT, payload);

export const setEmployeeType = payload => actionCreator(SET_EMPLOYEE_TYPE, payload);

export const updateBreadcrumb = payload => actionCreator(UPDATE_BREADCRUMB, payload);

export const getDash = ({
  personnel, date, location, jwt, employeeType
}, loading) => {
  const { baseUrl, getDashboard: { method, path } } = APIS;
  const url = `${baseUrl}${path({
    personnel, date, location, employeeType
  })}`;
  return async (dispatch) => {
    if (loading) {
      dispatch(setLoading(true));
    }
    const response = await requestJwt(method, url, {}, jwt);
    console.log(url, response);
    if (response.meta && response.meta.status === 200) {
      dispatch(setDash({ data: response.data, date }));
    } else {
      dispatch(setAlert({ open: true, variant: 'error', message: 'Unable to connect' }));
    }
    if (loading) {
      dispatch(setLoading(false));
    }
  };
};

export const getMapData = ({
  personnel, date, location, jwt, employeeType
}) => {
  const { baseUrl, getMapData: { method, path } } = APIS;
  const url = `${baseUrl}${path({
    personnel, date, location, employeeType
  })}`;
  return async (dispatch) => {
    dispatch(actionCreator(COMP_LOAD, 'mapData'));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(url, response);
    if (response.meta && response.meta.status === 200) {
      dispatch(actionCreator(SET_MAPDATA, response.data));
    }
    dispatch(actionCreator(COMP_LOAD, ''));
  };
};

export const getCallout = ({
  date, location, type, jwt
}) => {
  const { baseUrl, getCallout: { method, path } } = APIS;
  const url = `${baseUrl}${path({
    date, location, type
  })}`;
  return async (dispatch) => {
    dispatch(actionCreator(COMP_LOAD, 'callout'));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(url, response);
    if (response.meta && response.meta.status === 200) {
      dispatch(actionCreator(SET_CALLOUT, response.data));
    } else {
      dispatch(actionCreator(SET_CALLOUT, []));
    }
    dispatch(actionCreator(COMP_LOAD, ''));
  };
};

export const getMonth = ({ personnel, date, location, jwt }) => {
  const { baseUrl, getDashboard: { method, path } } = APIS;
  const url = `${baseUrl}${path({ personnel, date, location })}`;
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(url, response);
    if (response.meta && response.meta.status === 200) {
      dispatch(actionCreator(SET_MONTH, response.data));
    }
    dispatch(setLoading(false));
  };
};

export const getYear = ({ personnel, date, location, jwt }) => {
  const { baseUrl, getDashboard: { method, path } } = APIS;
  const url = `${baseUrl}${path({ personnel, date, location })}`;
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(url, response);
    if (response.meta && response.meta.status === 200) {
      dispatch(actionCreator(SET_YEAR, response.data));
    }
    dispatch(setLoading(false));
  };
};

export const setPercent = (filter, jwt) => {
  const { baseUrl, getPercent: { method, path } } = APIS;
  const url = `${baseUrl}${path(filter)}`;
  console.log(url);
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(response, url);
    if (response.meta && response.meta.status === 200) {
      dispatch(setPercentAction(response.data));
    } else {
      dispatch(setAlert({ open: true, variant: 'error', message: 'Unable to connect' }));
    }
    dispatch(setLoading(false));
  };
};

export const setReport = (filter, jwt) => {
  const { baseUrl, getPercent: { method, path } } = APIS;
  const url = `${baseUrl}${path({ ...filter, reportType: 'percentageschool' })}`;
  console.log(url);
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(method, url, response);
    if (response.meta && response.meta.status === 200 && response.data.records) {
      dispatch(actionCreator(SET_REPORT, response.data));
    }
    dispatch(setLoading(false));
  };
};

export const setParams = (jwt) => {
  const { baseUrl, getParams: { method, path } } = APIS;
  const url = `${baseUrl}${path}`;
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await requestJwt(method, url, {}, jwt);
    if (response.meta && response.meta.status === 200) {
      dispatch(setParamsAction(response.data));
    }
    dispatch(setLoading(false));
  };
};

export const setWorkTime = (jwt) => {
  const { baseUrl, getWorkTime: { method, path } } = APIS;
  const url = `${baseUrl}${path}`;
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await requestJwt(method, url, {}, jwt);
    if (response.meta && response.meta.status === 200) {
      dispatch(setWorkTimeAction(response.data.worktime));
    }
    if (response.meta && response.meta.status === 404) {
      dispatch(setWorkTimeAction([]));
    }
    dispatch(setLoading(false));
  };
};

export const setWorkGroup = (jwt) => {
  const { baseUrl, getWorkGroup: { method, path } } = APIS;
  const url = `${baseUrl}${path}`;
  return async (dispatch) => {
    dispatch(actionCreator(COMP_LOAD, 'workgroup'));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(response);
    if (response.meta && response.meta.status === 200) {
      dispatch(setWorkGroupAction(response.data.workgroup));
    }
    if (response.meta && response.meta.status === 404) {
      dispatch(setWorkGroupAction([]));
    }
    dispatch(actionCreator(COMP_LOAD, ''));
  };
};

export const setLocation = (jwt) => {
  const { baseUrl, getLocation: { method, path } } = APIS;
  const url = `${baseUrl}${path}`;
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(response);
    if (response.meta && response.meta.status === 200) {
      dispatch(setLocationAction(response.data.location));
    }
    if (response.meta && response.meta.status === 404) {
      dispatch(setLocationAction([]));
    }
    dispatch(setLoading(false));
  };
};

export const setEmployees = (filter, jwt) => {
  console.log('setting emps');
  const { baseUrl, getEmployees: { method, path } } = APIS;
  const url = `${baseUrl}${path(filter)}`;
  console.log(url);
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await requestJwt(method, url, {}, jwt);
    if (response.meta && response.meta.status === 200) {
      dispatch(setEmployeesAction(response.data));
    }
    if (response.meta && response.meta.status === 404) {
      dispatch(setEmployeesAction({ employees: [] }));
    }
    dispatch(setLoading(false));
  };
};

export const setStudents = (filter, jwt) => {
  const { baseUrl, getStudents: { method, path } } = APIS;
  const url = `${baseUrl}${path(filter)}`;
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(url, response);
    if (response.meta && response.meta.status === 200) {
      dispatch(actionCreator(SET_STUDENTS, response.data));
    }
    if (response.meta && response.meta.status === 404) {
      dispatch(actionCreator(SET_STUDENTS, { students: [] }));
    }
    dispatch(setLoading(false));
  };
};

export const setGuardians = (filter, jwt) => {
  const { baseUrl, getGuardians: { method, path } } = APIS;
  const url = `${baseUrl}${path(filter)}`;
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(url, response);
    if (response.meta && response.meta.status === 200) {
      dispatch(actionCreator(SET_GUARDIANS, response.data));
    }
    if (response.meta && response.meta.status === 404) {
      dispatch(actionCreator(SET_GUARDIANS, { guardians: [] }));
    }
    dispatch(setLoading(false));
  };
};

export const setWards = (guardianId, jwt) => {
  const { baseUrl, getWards: { method, path } } = APIS;
  const url = `${baseUrl}${path(guardianId)}`;
  return async (dispatch) => {
    dispatch(actionCreator(SET_WARDS, { wards: [] }));
    dispatch(actionCreator(COMP_LOAD, 'wards'));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(url, response);
    if (response.meta && response.meta.status === 200) {
      dispatch(actionCreator(SET_WARDS, response.data));
    }
    dispatch(actionCreator(COMP_LOAD, ''));
  };
}

export const setOof = (jwt) => {
  const { baseUrl, getOutOfOffice: { method, path } } = APIS;
  const url = `${baseUrl}${path}`;
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(response);
    if (response.meta && response.meta.status === 200) {
      dispatch(setOofAction(response.data.outofoffice));
    }
    if (response.meta && response.meta.status === 404) {
      dispatch(setOofAction([]));
    }
    dispatch(setLoading(false));
  };
};

export const setAbsentees = (filter, jwt) => {
  const { baseUrl, getAbsentees: { method, path } } = APIS;
  const url = `${baseUrl}${path(filter)}`;
  console.log(url);
  return async (dispatch) => {
    dispatch(setLoading(true));
    const response = await requestJwt(method, url, {}, jwt);
    if (response.meta && response.meta.status === 200) {
      dispatch(actionCreator(SET_ABSENTEES, response.data));
    }
    dispatch(setLoading(false));
  };
};
export const setSub = (jwt) => {
  const { baseUrl, getSub: { method, path } } = APIS;
  const url = `${baseUrl}${path}`;
  return async (dispatch) => {
    dispatch(actionCreator(COMP_LOAD, 'getSub'));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(response, url);
    if (response.meta && response.meta.status === 200) {
      dispatch(actionCreator(SET_SUB, response.data));
    }
    dispatch(actionCreator(COMP_LOAD, ''));
  };
};

export const setTerminals = (page, jwt) => {
  const { baseUrl, getTerminals: { method, path } } = APIS;
  const url = `${baseUrl}${path(page)}`;
  return async (dispatch) => {
    dispatch(actionCreator(COMP_LOAD, 'terminals'));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(response, url);
    if (response.meta && response.meta.status === 200) {
      dispatch(actionCreator(SET_TERMINALS, response.data));
    }
    dispatch(actionCreator(COMP_LOAD, ''));
  };
};

export const setAllEmployees = (jwt) => {
  const { baseUrl, getAllEmployees: { method, path } } = APIS;
  const url = `${baseUrl}${path}`;
  return async (dispatch) => {
    dispatch(actionCreator(COMP_LOAD, 'allEmployees'));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(response, url);
    if (response.meta && response.meta.status === 200) {
      dispatch(actionCreator(SET_ALL_EMPLOYEES, response.data.employee));
    }
    dispatch(actionCreator(COMP_LOAD, ''));
  };
};
