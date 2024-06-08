import axios from "axios";

/**
 * Criamos uma instância da Biblioteca Axios, chamada api, através 
 * do método create(). Dentro do método, definimos um objeto de 
 * configuração, que possui a propriedade baseURL. Na propriedade 
 * baseURL, insira o Link do Deploy do Backend do seu Blog Pessoal.
 *  
 * Isso significa que todas as Requisições HTTP, efetuadas nesta 
 * instância do Axios, estarão acessando o endereço do Servidor, 
 * onde o seu deploy foi realizado, funcionando com um prefixo do 
 * endereço do endpoint, que você deseja consumir.
 * 
 *  **Exemplo**: 'https://blogpessoal.onrender.com/postagens'
 * 
 * onde:
 * 
 * - https://blogpessoal.onrender.com é o prefixo (Endereço do Deploy)
 * 
 * - /postagens é a URL do endpoint
 */
// const api = axios.create({
//     baseURL: "https://blogpessoal-v5jv.onrender.com",
//   });

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});


export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header);
}