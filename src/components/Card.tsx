import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
import CardLayout from './CardLayout';

const Card = ({ isLogin }: { isLogin: boolean }) => {
  let nav = useNavigate()
  return (
    <CardLayout>
      <div className="d-flex flex-column align-items-center gap-5">
        <div className="font-cherry font-size-50 title-font-size color-B9561F">
          {isLogin ? 'LOGIN' : 'REGISTER'}
        </div>
        <div className="w-lg-50 w-75">
          <UserForm isLogin={isLogin} />
        </div>
        <div
          onClick={() => nav(isLogin ? '/register' : '/login')}
          className="redirect-text cursor-pointer text-center"
        >
          {isLogin
            ? "Don't have an account? Click!"
            : 'Have an account? Click!'}
        </div>
      </div>
    </CardLayout>
  )
}
export default Card
