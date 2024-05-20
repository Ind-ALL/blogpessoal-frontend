import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Navbar() {
 
  const navigate = useNavigate()

  const {handleLogout} = useContext(AuthContext)

  function logout(){
    handleLogout()
    alert("O usuário foi desconectado com sucesso!")
    navigate('/')
  }

  return (
    <>
     <div className='bg-indigo-900 text-white flex justify-center py-4 px-6'>
          <div className="container flex justify-between text-lg">

            <Link to="/" className='text-2xl font-bold uppercase cursor-pointer hover:text-rose-400'>Blog Pessoal</Link>

            <div className='flex gap-4'>
              <div className='hover:underline cursor-pointer hover:text-rose-400'>Postagens</div>
              <div className='hover:underline cursor-pointer hover:text-rose-400'>Temas</div>
              <div className='hover:underline cursor-pointer hover:text-rose-400'>Cadastrar tema</div>
              <div className='hover:underline cursor-pointer hover:text-rose-400'>Perfil</div>
              {/* <Link to="/login" className='hover:underline cursor-pointer hover:text-rose-400'>Sair</Link> */}
              <Link to="" onClick={logout}>
                <div className='hover:underline cursor-pointer hover:text-rose-400'>Sair</div>
              </Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar