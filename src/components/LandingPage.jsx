import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import sayaImage from "../images/saya.jpg";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #d9e4f5 0%, #fdfbfb 100%)",
        p: 2,
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 15s ease infinite",
        "@keyframes gradientAnimation": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Card
        elevation={10}
        sx={{
          maxWidth: 420,
          width: "100%",
          p: 4,
          borderRadius: 5,
          textAlign: "center",
          bgcolor: "background.paper",
          boxShadow:
            "0 8px 16px rgba(25, 118, 210, 0.2), 0 6px 20px rgba(25, 118, 210, 0.19)",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow:
              "0 12px 24px rgba(25, 118, 210, 0.3), 0 10px 30px rgba(25, 118, 210, 0.25)",
          },
        }}
      >
        <Box
          component="img"
          src={sayaImage}
          alt="Saya-e-Falah"
          sx={{
            width: 180,
            height: 180,
            objectFit: "cover",
            borderRadius: "50%",
            mb: 3,
            mx: "auto",
            boxShadow: "0 4px 15px rgba(25, 118, 210, 0.3)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Saya-e-Falah
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontStyle: "italic", mb: 2, color: "text.secondary" }}
          >
            Empowering community with care and support
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            A unified platform for community help, adoption services, missing
            person reports, and emergency assistance.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/signup")}
            sx={{
              px: 5,
              py: 1.5,
              fontWeight: "bold",
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
              borderRadius: 3,
              boxShadow: "0 6px 12px rgba(25, 118, 210, 0.4)",
              transition: "background-color 0.3s ease",
              minWidth: 180,
            }}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LandingPage;
