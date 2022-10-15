import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000/api",
});

api.defaults.timeout = 2500;

api.interceptors.request.use(
	async (config) => config,
	(error) => Promise.reject(error)
);

api.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default api;
