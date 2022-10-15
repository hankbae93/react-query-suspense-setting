import api from "../lib/api";
import { Hello } from "../pages/api/hello";

export const fetchHello = async () => {
	const response = await api.get<Hello>("/hello");

	return response.data;
};
