import { useAtom } from "jotai";
import { userAtom } from "atoms/user";
import { userAuthenticatedAtom } from "atoms/auth";

export const useGetUser = () => {
	const [, setUser] = useAtom(userAtom);
	const [userAuthenticated, setUserAuthenticated] = useAtom(
		userAuthenticatedAtom,
	);
	return () => {
		const localUser = JSON.parse(
			localStorage.getItem("pocketbase_auth"),
		)?.model;
		if (!userAuthenticated && localUser !== undefined) {
			setUser(localUser);
			setUserAuthenticated(true);
		}
	};
};
