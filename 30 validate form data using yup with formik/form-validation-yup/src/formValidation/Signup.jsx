import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
    validationSchema: Yup.object({
      name: Yup.string().min(4, "Name must have atleast 4 character").required(),
      email: Yup.string().email().required("In valid email"),
      password: Yup.string().min(6, "Password must have atleast 6 character").required(),
    }),
  });

  const nameError = formik.touched.name && formik.errors.name && <span style={{ color: "red" }}>{formik.errors.name} </span>;
  const emailError = formik.touched.email && formik.errors.email && <span style={{ color: "red" }}>{formik.errors.email} </span>;
  const passwordError = formik.touched.password && formik.errors.password && <span style={{ color: "red" }}>{formik.errors.password} </span>;

  const formField = (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} />
        <br />
        {nameError}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
        <br />
        {emailError}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
        <br />
        {passwordError}
      </div>

      <button type="submit">Submit</button>
    </form>
  );

  return <div>{formField}</div>;
};

export default Signup;
