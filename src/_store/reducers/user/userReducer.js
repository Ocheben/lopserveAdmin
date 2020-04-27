/* eslint-disable import/prefer-default-export */
import { USERCONSTANTS, AUTHCONSTANTS } from '../../constants';

export const initState = {
  client: '',
  loading: true,
  compLoad: '',
  alert: {
    open: false,
    variant: 'info',
    message: ''
  },
  breadcrumbData: {
    parent: 'Vendors',
    child: null
  },
  employeeType: 2,
  dashboard: {
    [new Date().toLocaleDateString().replace(/\//g, '-')]: {
      present: 31,
      absent: 9,
      early: 12,
      late: 11,
      total: 51
    }
  },
  mapData: [],
  callout: [],
  monthly: [],
  yearly: [],
  percent: {},
  report: {},
  params: {},
  worktime: [],
  workgroup: [],
  locations: [],
  employeeList: {
    employees: []
  },
  studentList: {
    students: []
  },
  guardianList: {
    guardians: []
  },
  wardList: {
    wards: []
  },
  oof: [],
  absenteeList: {
    records: []
  },
  sub: {
    expired: false,
    note: '',
    duration: [],
    payment: []
  },
  terminalList: {
    records: []
  }
};

const {
  SET_DASHBOARD, SET_LOADING, SET_PERCENT, SET_REPORT, SET_PARAMS, SET_WORKTIME, SET_WORKGROUP, SET_LOCATION, SET_EMPLOYEES, SET_OOF, SET_ABSENTEES, SET_MONTH, SET_YEAR, SET_ALERT, SET_STUDENTS, SET_GUARDIANS, SET_MAPDATA, SET_SUB, SET_EMPLOYEE_TYPE, SET_WARDS, COMP_LOAD, SET_TERMINALS, SET_ALL_EMPLOYEES, UPDATE_BREADCRUMB, SET_CALLOUT
} = USERCONSTANTS;
const { LOGOUT } = AUTHCONSTANTS;

const userData = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case COMP_LOAD:
      return {
        ...state,
        compLoad: action.payload
      };

    case SET_ALERT:
      return {
        ...state,
        alert: { ...state.alert, ...action.payload }
      };

    case UPDATE_BREADCRUMB:
      return {
        ...state,
        breadcrumbData: { ...state.breadcrumbData, ...action.payload }
      };
    case SET_EMPLOYEE_TYPE:
      return {
        ...state,
        employeeType: action.payload
      };

    case SET_DASHBOARD:
      console.log(action.payload);
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          [action.payload.date]: action.payload.data.report
        },
        params: { ...state.params, location: action.payload.data.location },
        monthly: action.payload.data.DAILYTREND,
        yearly: action.payload.data.MONTHLYTREND
      };

    case SET_MAPDATA:
      return {
        ...state,
        mapData: action.payload
      };

    case SET_CALLOUT:
      return {
        ...state,
        callout: action.payload.RECORDS || []
      };

    case SET_MONTH:
      return {
        ...state,
        monthly: action.payload.DAILYTREND
      };

    case SET_YEAR:
      return {
        ...state,
        yearly: action.payload.MONTHLYTREND
      };

    case SET_PERCENT:
      return {
        ...state,
        percent: action.payload
      };
    case SET_REPORT:
      return {
        ...state,
        report: action.payload
      };
    case SET_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          ...action.payload
        }
      };
    case SET_ALL_EMPLOYEES:
      return {
        ...state,
        params: {
          ...state.params,
          employees: action.payload
        }
      };

    case SET_WORKTIME:
      return {
        ...state,
        worktime: action.payload
      };
    case SET_WORKGROUP:
      return {
        ...state,
        workgroup: action.payload[0]
      };
    case SET_LOCATION:
      return {
        ...state,
        locations: action.payload
      };

    case SET_EMPLOYEES:
      return {
        ...state,
        employeeList: action.payload
      };

    case SET_STUDENTS:
      return {
        ...state,
        studentList: action.payload
      };

    case SET_GUARDIANS:
      return {
        ...state,
        guardianList: action.payload
      };

    case SET_WARDS:
      return {
        ...state,
        wardList: action.payload
      };

    case SET_OOF:
      return {
        ...state,
        oof: action.payload
      };
    case SET_ABSENTEES:
      return {
        ...state,
        absenteeList: action.payload
      };

    case SET_SUB:
      return {
        ...state,
        sub: action.payload
      };

    case SET_TERMINALS:
      return {
        ...state,
        terminalList: action.payload
      };

    case LOGOUT:
      return {
        ...initState
      };

    default: return state;
  }
};

export default userData;
