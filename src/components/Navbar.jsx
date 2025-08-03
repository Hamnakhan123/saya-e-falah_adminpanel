import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import Logo from "../images/saya.jpg";

function Navbar({ toggleTheme, darkMode }) {
  const navigate = useNavigate();

  const navLinks = [
    { title: "Adoption", path: "/adoption" },
    { title: "Ambulance Drivers", path: "/ambulance-drivers" },
    { title: "Missing", path: "/missing" },
    { title: "Reports", path: "/reports" },
    { title: "Dashboard", path: "/dashboard" },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
        boxShadow: 3,
        paddingY: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* Logo */}
        <Box
          component="img"
          src={Logo}
          alt="Saya e Falah Logo"
          onClick={() => navigate("/dashboard")}
          sx={{
            height: 70,
            cursor: "pointer",
            borderRadius: 2,
          }}
        />

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
          {navLinks.map((link) => (
            <Button
              key={link.title}
              onClick={() => navigate(link.path)}
              sx={{
                fontWeight: 600,
                textTransform: "none",
                color: darkMode ? "#f5f5f5" : "#48A6A7",
                fontSize: "1rem",
                '&:hover': {
                  backgroundColor: darkMode ? "#333" : "#e3f2fd",
                  borderRadius: 1,
                },
              }}
            >
              {link.title}
            </Button>
          ))}
        </Box>

        {/* Theme Toggle + Logout */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton onClick={toggleTheme} sx={{ color: darkMode ? "#fff" : "#48A6A7" }}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Button
            onClick={handleLogout}
            variant="contained"
            sx={{
              backgroundColor: "#48A6A7",
              color: "#fff",
              fontWeight: 600,
              textTransform: "none",
              '&:hover': {
                backgroundColor: "#48A6A7",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
