import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './Cadastro.css'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { ToastAlerta } from '../../utils/ToastAlerta';

function Cadastro() {

  /**
  * Cria a constante navigate, que receberá o hook useNavigate().
  * Através da constante navigate, o usuário será redirecionado 
  * para outras rotas da aplicação, conforme a necessidade.
  */
  const navigate = useNavigate();

  /**
  * Definimos um estado chamado isLoading, do tipo boolean, através do 
  * Hook UseState, com o valor inicial false. 
  * Este estado será utilizado para armazenar um valor do tipo boolean, 
  * auxiliando no processo de confirmação se uma determinada ação foi 
  * finalizada (false) ou não (true). 
  * Para atualizar o estado da variável isLoading, foi criada a 
  * função setIsLoading.
  * 
  * Para modificar o valor do estado isLoading, foi criada a função 
  * setIsLoading, responsável por atualizar o valor do estado 
  * isLoading, seguindo a sintaxe básica do Hook useState. 
  */
  const [isLoading, setIsLoading] = useState<boolean>(false)

  /**
   * Criamos um estado chamado confirmaSenha, do tipo string, através 
   * do Hook UseState, com o valor inicial vazio. 
   * Este estado será utilizado para armazenar e controlar o valor do 
   * input confirmarSenha do formulário.
   * 
   * Para modificar o valor do estado confirmaSenha, foi criada a função 
   * setConfirmaSenha, responsável por atualizar o valor do estado 
   * confirmaSenha, seguindo a sintaxe básica do Hook useState. 
   */
  const [confirmaSenha, setConfirmaSenha] = useState<string>('');

  /**
   * Criamos um estado chamado usuario, do tipo Usuario (Interface Model), 
   * através do Hook UseState, com todos os atributos da Interface Usuario,
   * inicializados com o valor vazio ou zero, de acordo com as respectivas 
   * tipagens de cada atributo. 
   * Para modificar o valor do estado, foi criada a função setUsuario, 
   * seguindo a sintaxe básica do Hook useState.
   * 
   * O objetivo do estado usuario é armazenar as informações do usuário, 
   * que será cadastrado na aplicação.
   */
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate('/login')
  }

  
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function handleConfirmaSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {

    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      setIsLoading(true)

      try {

        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso');

      } catch (error) {
        ToastAlerta('Erro ao cadastrar o usuário!', 'erro')
      }

    } else {
      ToastAlerta("Dados estão inconsistentes! Verifique os dados do usuário.", 'erro');
      setUsuario({ ...usuario, senha: '' });
      setConfirmaSenha('');
    }

    setIsLoading(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>

        <form className='flex justify-center items-center flex-col w-2/3 gap-3'
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
               
              value={usuario.nome}

              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"

              value={usuario.usuario}

              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmaSenha(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button className='rounded text-white bg-red-400 
                  hover:bg-red-700 w-1/2 py-2'
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='rounded text-white bg-indigo-400 
                           hover:bg-indigo-900 w-1/2 py-2
                           flex justify-center'
            >
              {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
                <span>Cadastrar</span>
              }
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro