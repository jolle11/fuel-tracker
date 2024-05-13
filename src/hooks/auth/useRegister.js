import { useConnectDB } from "./useConnectDB";

export const useRegister = () => {
	const pb = useConnectDB();
	return async (user) => {
		return (await pb).collection("users").create(user);
	};
};
