import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Link,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "@mui/material/styles";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const StyledCard = styled(Card)(({ theme }) => ({
  width: 350,
  maxWidth: "90vw",
  padding: theme.spacing(3),
  textAlign: "center",
  boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.background.paper,
}));

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      switch (err.code) {
        case "auth/user-not-found":
          setError("No user found with this email.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address.");
          break;
        default:
          setError("Failed to login. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      component={motion.div}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledCard component={motion.div} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Login
          </Typography>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Typography color="error" sx={{ mb: 2 }}>
                  {error}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} noValidate>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              required
              autoFocus
              autoComplete="email"
              type="email"
            />
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              required
              type="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: "bold",
                opacity: loading ? 0.7 : 1,
                pointerEvents: loading ? "none" : "auto",
                transition: "opacity 0.3s ease",
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
            </Button>
          </form>

          <Box mt={3}>
            <Typography variant="body2">
              Don't have an account?{" "}
              <Link component={RouterLink} to="/signup" variant="body2" color="primary" underline="hover">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </StyledCard>
    </Box>
  );
}

export default LoginForm;
