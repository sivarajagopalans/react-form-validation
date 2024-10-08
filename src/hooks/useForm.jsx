import { useState } from 'react'

export const useForm = () => {
  const [formData, setFormData] = useState(
    { username: '', email: '', password: '', cpassword: '' }
  );
  const [error, setError] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!formData.username.trim()) {
      errors.username = 'username required';
    }

    if (!formData.email.trim()) {
      errors.email = 'email required';
    }
    else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(formData.email)) {
      errors.email = 'email is invalid';
    }

    if (!formData.password.trim()) {
      errors.password = 'password required';
    }
    else if (formData.password.length !== 8) {
      errors.password = 'password must have minimum 8 characters';
    }
    if (!formData.cpassword.trim()) {
      errors.cpassword = 'confirm password is required';
    } else if (formData.password !== formData.cpassword) {
      errors.cpassword = 'password missmatch';
    }
    setError(errors);
  }

  return { formData, error, handleSubmit, handleChange };
}