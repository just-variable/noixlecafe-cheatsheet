import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./Login/Login";
import ColdOrHot from "./ColdOrHot/ColdOrHot";
import RecipePage from "./RecipePage/RecipePage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/main" element={<ColdOrHot />} />
          <Route path="/hot" element={<RecipePage type='hot' />} />
          <Route path="/cold" element={<RecipePage type='cold' />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
