import { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      alert("Registration Successful");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Registration Failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <br />

      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
}

export default Register;