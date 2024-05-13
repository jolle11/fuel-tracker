import { useAtom } from "jotai";
import { userAuthenticatedAtom } from "atoms/auth";
import { userAtom, userVehiclesAtom } from "atoms/user";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
	const [, setUserAuthenticated] = useAtom(userAuthenticatedAtom);
	const [, setUser] = useAtom(userAtom);
	const [, setUserVehicles] = useAtom(userVehiclesAtom);

	const navigate = useNavigate();

	return () => {
		setUserAuthenticated(false);
		setUser({});
		setUserVehicles([]);
		localStorage.removeItem("pocketbase_auth");
		navigate("/");
	};
};
