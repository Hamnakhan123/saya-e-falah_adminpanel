import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../images/saya.jpg";

function Navbar() {
  const navigate = useNavigate();

  const navLinks = [
    { title: "Adoption", path: "/adoption" },
    { title: "Ambulance Drivers", path: "/ambulance-drivers" },
    { title: "Missing", path: "/missing" },
    { title: "Reports", path: "/reports" },
    { title: "Dashboard", path: "/dashboard" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",  // Fixed light background
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
                color: "#48A6A7",  // Fixed blue color
                fontSize: "1rem",
                '&:hover': {
                  backgroundColor: "#e3f2fd",
                  borderRadius: 1,
                },
              }}
            >
              {link.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
