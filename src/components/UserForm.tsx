import '../assets/css/Register.css'
import '../assets/css/General.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AuthFormType } from '../utils/types'
import { login, register } from '../utils/api/Auth'
import SuccessSpinner from './SuccessSpinner'
import classNames from 'classnames'

const UserForm = ({ isLogin }: { isLogin: boolean }) => {

  let nav = useNavigate()

  const [input, setInput] = useState<AuthFormType>({
    Username: '',
    Password: '',
    Email: '',
  })

  const [status, setStatus] = useState({
    error: "",
    success: false,
    mailError: false
  });

  let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  const FormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    process: string
  ) => {
    e.preventDefault()
    if (process === 'login') {
      let returned = await login(input.Username, input.Password)
      if(returned.hasOwnProperty('token')){
        setStatus((prev) => {return {...prev, success: true}})
        sessionStorage.setItem('username', input.Username)
        nav('/configuration')
      } else{
        setStatus((prev) => {return {...prev, error: returned}})
      }
    }else{
      let res = await register(input.Username, input.Password, input.Email)
      if(res.hasOwnProperty('token')){
        setStatus((prev) => {return {...prev, success: true}})
        setTimeout(() => {
          nav('/login')
        }, 2000);
      } else{
        setStatus((prev) => {return {...prev, error: res}})
      }
    }
  }

  return (
    <form
      onSubmit={(e) => FormSubmit(e, isLogin ? 'login' : 'register')}
      className="d-flex flex-column gap-3"
    >
      <input
        type="text"
        className="form-control"
        placeholder="username"
        required
        onChange={(e) =>
          setInput((prev: AuthFormType) => {
            return { ...prev, Username: e.target.value }
          })
        }
      />
      {!isLogin && (
       <>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          required
          onChange={(e) =>{
            setStatus((prev) => {return {...prev, mailError: !regex.test(e.target.value)}})
             setInput((prev: AuthFormType) => {
              return { ...prev, Email: e.target.value }
            })
          }
           
          }
        />
        {status.mailError && <div className='color-red'>Check your email format</div>}
       </>
      )}
      <input
        type="password"
        className="form-control"
        placeholder="password"
        aria-describedby="passwordHelpBlock"
        required
        onChange={(e) =>
          setInput((prev: AuthFormType) => {
            return { ...prev, Password: e.target.value }
          })
        }
      />
      <button
        type="submit"
        className={classNames("btn bg-B9561F color-white submit-btn d-flex justify-content-center", 
        {"bg-green": status.success})}
      >
        {status.success && <SuccessSpinner />}
        {!status.success && (isLogin ? 'GO!' : 'JOIN US!')}
      </button>
      {status.error && <div className='text-center color-red'>{status.error}</div>}
    </form>
  )
}
export default UserForm
