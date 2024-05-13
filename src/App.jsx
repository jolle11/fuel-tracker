import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "components/Header";
import DashboardPage from "pages/DashboardPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { useEffect } from "react";
import { useGetUser } from "hooks/auth/useGetUser";
import VehiclePage from "pages/VehiclePage";
import { Footer } from "components/Footer";
import UserPage from "pages/UserPage";
import { useAtom } from "jotai";
import { userAuthenticatedAtom } from "./atoms/auth.js";

function App() {
    const setUser = useGetUser();

    const [userAuthenticated] = useAtom(userAuthenticatedAtom);

    useEffect(() => {
        setUser();
    }, []);

    return (
        <Router>
            <Header />
            <div className="app">
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    {userAuthenticated && (
                        <>
                            <Route path="/:username" element={<UserPage />} />
                            <Route
                                path="/:vehicleBrand/:vehicleNameplate"
                                element={<VehiclePage />}
                            />
                        </>
                    )}
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
