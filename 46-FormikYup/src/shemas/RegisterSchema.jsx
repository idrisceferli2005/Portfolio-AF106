import * as yup from 'yup';
export const registerschema = yup.object().shape({
    name: yup.string().min(3, "Name must beat least 3 characters").required("Name is required"),
    surname: yup.string().min(5, "Name must beat least 5 characters").required("Surname is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    username: yup.string().required("Username is required").lowercase("Username must be lowercase"),
    password: yup.string().required("Password is required").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
      confirmpassword: yup.string().required("Password is required").oneOf([yup.ref('password'), null], 'Passwords must match')
      });