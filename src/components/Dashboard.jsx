import { Button, Typography, Grid, Card, CardContent, CardMedia, Box, Zoom } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import AdoptionImage from "../images/Adoption.png";
import AmbulanceImage from "../images/Ambulance.jpeg";
import MissingImage from "../images/MissingPerson.jpg";
import ReportImage from "../images/Reports.png";
import Footer from "../components/Footer"; // Import Footer

const cards = [
  {
    id: 1,
    title: "Adoption",
    description: "Manage children adoption requests.",
    image: AdoptionImage,
    path: "/adoption"
  },
  {
    id: 2,
    title: "Ambulance Drivers",
    description: "Manage ambulance driver records",
    image: AmbulanceImage,
    path: "/ambulance-drivers"
  },
  {
    id: 3,
    title: "Missing Persons",
    description: "Find missing person present at Edhi foundation",
    image: MissingImage,
    path: "/missing"
  },
  {
    id: 4,
    title: "Reports",
    description: "Generate and download reports.",
    image: ReportImage,
    path: "/service-unavailable"
  }
];

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <Box sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#ffffff',       // White background
        boxShadow: 3,
        background: 'linear-gradient(to bottom right, #cce5ff, #ffffff)', // light blue to white
      }}>

        {/* Main Card */}
        <Card sx={{
          width: '100%',
          maxWidth: '2000px',
          p: 8,
          boxShadow: 6,
          borderRadius: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          margin: 'auto'
        }}>
          {/* Navbar-like Box */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(90deg, #005f73, #48A6A7)',
              padding: '16px 32px',
              borderRadius: '12px',
              boxShadow: 4,
              marginBottom: 4,
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Welcome to the Dashboard
            </Typography>
          </Box>


          {/* Cards Grid Layout */}
          <Grid container spacing={4} justifyContent="center">
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={card.id}>
                <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Card sx={{
                    height: '370',
                    maxWidth: 500, // 👈 Optional: limits width a bit
                    margin: 'auto', // 👈 Centered if width limited
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 4,
                    borderRadius: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.08)',
                      boxShadow: 8
                    }
                  }}>
                    <CardMedia
                      component="img"
                      sx={{
                        height: 250,
                        width: '100%',
                        objectFit: 'cover',
                        borderTopLeftRadius: '4px',
                        borderTopRightRadius: '4px'
                      }}
                      image={card.image}
                      alt={card.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        {card.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {card.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, textAlign: 'center' }}>
                      <Button
                        variant="contained"
                        fullWidth
                        size="medium"
                        onClick={() => handleCardClick(card.path)}
                        sx={{
                          backgroundColor: '#48A6A7',
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                          '&:hover': {
                            backgroundColor: '#48A6A7'
                          }
                        }}
                      >
                        Go to {card.title}
                      </Button>
                    </Box>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Box>

      {/* Footer Component */}
      <Box>

      </Box>
    </>
  );
}

export default Dashboard;
