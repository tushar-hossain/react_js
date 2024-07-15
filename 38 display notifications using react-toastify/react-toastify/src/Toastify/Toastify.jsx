import { useFormik } from "formik";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
    },
    onSubmit: (values, { resetForm }) => {
      toast("Registration Successfully");
      resetForm();
    },
  });

  return (
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

      <div>
        <label htmlFor="age">Age: </label>
        <input type="number" name="age" id="age" value={formik.values.age} onChange={formik.handleChange} />
      </div>

      <button type="submit">Submit</button>
      <ToastContainer />
    </form>
  );
};

export default Toastify;
