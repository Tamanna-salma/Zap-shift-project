import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistion = (data) => {
    console.log('after register', data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistion)}>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              {/* email* */}
              <label className="label">Email</label>
              <input type="email"{...register("email", { required: true })} className="input" placeholder="Email" />
              {errors.name?.type === 'required' && <p className='text-red-500'>Email is required.</p>}

              {/* password */}
              <label className="label">Password</label>
              <input type="password"{...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/

              })} className="input" placeholder="Password" />

              {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>
              }

              {
                errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
              }

              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>

            <p>Already have an account <Link
              state={location.state}
              className='text-blue-400 underline'
              to="/login">Login</Link></p>

          </div>
        </div>
      </form>
    </div>
  )
}

export default Register