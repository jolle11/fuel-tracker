import { useConnectDB } from "./useConnectDB";

export const useLogin = () => {
	const pb = useConnectDB();
	return async (user) => {
		return (await pb)
			.collection("users")
			.authWithPassword(user.email.trim(), user.password.trim());
	};
};
