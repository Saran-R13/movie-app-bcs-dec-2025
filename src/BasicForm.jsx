import { useFormik } from "formik";

import { API } from "./global";
import { object, string } from "yup";
import { useNavigate } from "react-router";

let loginValidationSchema = object({
  username: string()
    .required("user name is missing😞")
    .min(4, "username is so sort 😂 "),
  password: string().required("why not fill the blon"),
});

export function BasicForm() {
  const navigate = useNavigate();
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: loginValidationSchema,
      onSubmit: (data) => {
        console.log("When all validations passes");
        console.log("All data", data);

        fetch(`${API}/auth/login`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data?.token) {
              localStorage.setItem("token", data.token);
              navigate("/movies");
            }
          });
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        name="username"
      />

      {touched.username && errors.username ? errors.username : null}

      <input
        type="text"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
      />

      {touched.password && errors.password ? errors.password : null}
      <button type="submit">Login</button>
    </form>
  );
}
