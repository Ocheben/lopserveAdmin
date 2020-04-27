import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import 'date-fns';
// import format from 'date-fns/format';
// import enLocale from 'date-fns/locale/en-GB';
// import DateFnsUtils from '@date-io/date-fns';
import { styles } from '../assets/styles/style';
import { StyledInput } from './styledComponents';

// export const TimeInput = withStyles(styles)((props) => {
//   const {
//     classes, InputProps, InputLabelProps, ...otherProps
//   } = props;
//   const textFieldProps = {
//     InputLabelProps: {
//       classes: {
//         root: classes.label,
//         shrink: classes.shrinkLabel
//       },
//       ...InputLabelProps
//     },
//     InputProps: {
//       classes: {
//         input: classes.input,
//         focused: classes.inputFocused,
//       },
//       ...InputProps,
//     },
//     FormHelperTextProps: {
//       className: 'formHelper'
//     }
//   };
//   return (
//     <StyledTimePicker {...otherProps} {...textFieldProps} />
//   );
// });

// class LocalizedUtils extends DateFnsUtils {
//   getDatePickerHeaderText(date) {
//     return format(date, 'd MMM yyyy', { locale: this.locale });
//   }
// }
// export const DateInput = withStyles(styles)((props) => {
//   const {
//     classes, InputProps, InputLabelProps, ...otherProps
//   } = props;
//   const textFieldProps = {
//     InputLabelProps: {
//       classes: {
//         root: classes.label,
//         shrink: classes.shrinkLabel
//       },
//       ...InputLabelProps
//     },
//     InputProps: {
//       classes: {
//         input: classes.input,
//         focused: classes.inputFocused,
//       },
//       ...InputProps,
//     },
//     FormHelperTextProps: {
//       className: 'formHelper'
//     }
//   };
//   return (
//     <MuiPickersUtilsProvider utils={LocalizedUtils} locale={enLocale}>
//       <StyledDatePicker format="dd MMM yyyy" {...otherProps} {...textFieldProps} />
//     </MuiPickersUtilsProvider>
//   );
// });

const Input = (props) => {
  const {
    classes, InputProps, InputLabelProps, ...otherProps
  } = props;
  const textFieldProps = {
    InputLabelProps: {
      classes: {
        root: classes.label,
      },
      ...InputLabelProps
    },
    InputProps: {
      classes: {
        input: classes.input,
        focused: classes.inputFocused,
      },
      ...InputProps,
    },
    FormHelperTextProps: {
      className: 'formHelper'
    }
  };
  return (
    <StyledInput {...otherProps} {...textFieldProps} />
  );
};

export default withStyles(styles)(Input);
