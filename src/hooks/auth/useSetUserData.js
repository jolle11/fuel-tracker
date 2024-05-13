import { useConnectDB } from "./useConnectDB";

export const useSetUserData = () => {
	const pb = useConnectDB();

	return async (userData) => {
		return (await pb).collection("users").update(userData.id, userData);
	};
};
