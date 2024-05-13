import { useConnectDB } from "./useConnectDB";

export const useGoogleLogin = () => {
	const pb = useConnectDB();
	return async () => {
		return (await pb)
			.collection("users")
			.authWithOAuth2({ provider: "google" });
	};
};
