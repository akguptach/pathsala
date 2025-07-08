import * as Yup from "yup";
export const SCHOOL_FORM_FIELDS = [
    {
      name: "schoolName",
      label: "School Name",
      type: "text",
      placeholder: "Enter school name",
      validation: Yup.string().required("School name is required"),
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      placeholder: "Enter school address",
      validation: Yup.string().required("Address is required"),
    },
    {
      name: "contactNumber",
      label: "Contact Number",
      type: "text",
      placeholder: "Enter contact number",
      validation: Yup.string()
        .matches(/^[0-9]{10}$/, "Contact number must be 10 digits")
        .required("Contact number is required"),
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email address",
      validation: Yup.string().email("Invalid email format").required("Email is required"),
    },
  ];

  export const CONTACT_FORM_FIELDS = [
    {
      name: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Enter your name",
      validation: Yup.string().required("Name is required"),
    },
    {
      name: "designation",
      label: "Designation",
      type: "text",
      placeholder: "Enter your designation",
      validation: Yup.string().required("Designation is required"),
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      validation: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    },
    {
      name: "mobileNumber",
      label: "Mobile Number",
      type: "text",
      placeholder: "Enter your mobile number",
      validation: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
    },
  ];