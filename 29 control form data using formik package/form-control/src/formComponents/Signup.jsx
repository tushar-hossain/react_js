import { useFormik } from "formik";

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
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
