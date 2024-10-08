import './SignupForm.css'
import backImage from '../assets/background.jpg'
import { useForm } from '../hooks/useForm'

export const SignupForm = () => {

  const { formData, error, handleChange, handleSubmit } = useForm();

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>React Form validation</h1>
      <div className='form-view'>
        <img src={backImage} alt="bg" />
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <p className='form-heading'>Create your account</p>
          </div>
          <div className="form-group">
            <label htmlFor="username"></label>
            <input type="text" name='username' placeholder='Enter your user name' value={formData.username} onChange={handleChange} />
            {error.username && <p className='error-msg'>{error.username}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input type="email" name='email' placeholder='Enter your email id' value={formData.email} onChange={handleChange} />
            {error.email && <p className='error-msg'>{error.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input type="password" name='password' placeholder='Enter your password' value={formData.password} onChange={handleChange} />
            {error.password && <p className='error-msg'>{error.password}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="cpassword"></label>
            <input type="password" name='cpassword' placeholder='Enter your confirm password' value={formData.cpassword} onChange={handleChange} />
            {error.cpassword && <p className='error-msg'>{error.cpassword}</p>}
          </div>
          <div>
            <button type="submit" className='signup-btn'>Signup</button>
          </div>
          <div>
            <p className='login-link'>Already have an account? Login
              <a href="#">here</a>
            </p>
          </div>
        </form>
      </div>

    </>
  )
}
