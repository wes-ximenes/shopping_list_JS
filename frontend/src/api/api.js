//Aqui usamos o axios para criar a API.
//Axios é uma biblioteca que liga a api do backend com o frontend, permitindo que o frontend faça requisições HTTP para o backend.

import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000",
}); //Esse é o endereço do backend, que é onde o frontend vai fazer as requisições.

export default api;
