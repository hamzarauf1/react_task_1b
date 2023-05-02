import AuthProvider from "./authContext";
import GlobalProvider from "./globalContext";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./main";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
  <Router>
    {/* <AdminLoginPage/> */}
    {/* <Main/> */}
    <AdminDashboardPage/>
  </Router>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
