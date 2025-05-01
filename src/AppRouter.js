import { useContext } from 'react';
import { UserContext } from './UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderMaterialsPage from './pages/OrderMaterialsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import UserAccountPage from './pages/UserAccountPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';

function AppRouter() {
  const { user } = useContext(UserContext);// this gets user info

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/order"
          element={user ? <OrderMaterialsPage /> : <NotFoundPage />} // this checks if user logged in
        />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/account" element={<UserAccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

  );
}

export default AppRouter;
