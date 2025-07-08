import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  SCHOOL_FORM_FIELDS,
  CONTACT_FORM_FIELDS,
} from "../../../core/common/data/json/addSchoolsData";
// import { registerSchool } from "../../../core/redux/actions/schoolActions";
import "./AddSchoolForm.css";

type FormField = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  validation: Yup.AnySchema;
};

const AddSchoolForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allFields: FormField[] = [...SCHOOL_FORM_FIELDS, ...CONTACT_FORM_FIELDS];

  const validationSchema = Yup.object(
    allFields.reduce((schema, field) => {
      return {
        ...schema,
        [field.name]: field.validation,
      };
    }, {} as Record<string, Yup.AnySchema>)
  );

  const formik = useFormik({
    initialValues: allFields.reduce((values, field) => {
      return {
        ...values,
        [field.name]: "",
      };
    }, {} as Record<string, string>),
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form values:", values);

      // try {
      //   const response = await dispatch(registerSchool(values));
      //   if (
      //     response?.payload?.statusCode >= 200 &&
      //     response?.payload?.statusCode <= 210
      //   ) {
      //     navigate("/successPage", { state: { formData: values } });
      //   } else {
      //     alert("Error during school registration.");
      //   }
      // } catch (err) {
      //   console.error("Error during school registration:", err);
      // }
    },
  });

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Register Your School</h1>
              <form onSubmit={formik.handleSubmit}>
                <h2 className="mb-3">School Information</h2>
                {SCHOOL_FORM_FIELDS.map((field) => (
                  <div key={field.name} className="mb-3">
                    <label htmlFor={field.name} className="form-label">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      className={`form-control ${
                        formik.touched[field.name] && formik.errors[field.name]
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder={field.placeholder}
                      value={formik.values[field.name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched[field.name] && formik.errors[field.name] && (
                      <div className="invalid-feedback">{formik.errors[field.name]}</div>
                    )}
                  </div>
                ))}

                <h2 className="mb-3">Contact Information</h2>
                {CONTACT_FORM_FIELDS.map((field) => (
                  <div key={field.name} className="mb-3">
                    <label htmlFor={field.name} className="form-label">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      className={`form-control ${
                        formik.touched[field.name] && formik.errors[field.name]
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder={field.placeholder}
                      value={formik.values[field.name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched[field.name] && formik.errors[field.name] && (
                      <div className="invalid-feedback">{formik.errors[field.name]}</div>
                    )}
                  </div>
                ))}

                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSchoolForm;
