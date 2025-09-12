// import { Button, Typography, Grid, Card, CardContent, CardMedia, Box, Zoom } from "@mui/material";
// import { signOut } from "firebase/auth";
// import { auth } from "./firebase";
// import { useNavigate } from "react-router-dom";
// import AdoptionImage from "../images/Adoption.png";
// import AmbulanceImage from "../images/Ambulance.jpeg";
// import MissingImage from "../images/MissingPerson.jpg";
// import ReportImage from "../images/Reports.png";
// import Footer from "../components/Footer"; // Import Footer

// const cards = [
//   {
//     id: 1,
//     title: "Adoption",
//     description: "Manage children adoption requests.",
//     image: AdoptionImage,
//     path: "/adoption"
//   },
//   {
//     id: 2,
//     title: "Ambulance Drivers",
//     description: "Manage ambulance driver records",
//     image: AmbulanceImage,
//     path: "/ambulance-drivers"
//   },
//   {
//     id: 3,
//     title: "Missing Persons",
//     description: "Find missing person present at Edhi foundation",
//     image: MissingImage,
//     path: "/missing"
//   },
//   {
//     id: 4,
//     title: "Reports",
//     description: "Generate and download reports.",
//     image: ReportImage,
//     path: "/service-unavailable"
//   }
// ];

// function Dashboard() {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/login");
//   };

//   const handleCardClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <>
//       <Box sx={{
//         p: 3,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#ffffff',       // White background
//         boxShadow: 3,
//         background: 'linear-gradient(to bottom right, #cce5ff, #ffffff)', // light blue to white
//       }}>

//         {/* Main Card */}
//         <Card sx={{
//           width: '100%',
//           maxWidth: '2000px',
//           p: 8,
//           boxShadow: 6,
//           borderRadius: 4,
//           backgroundColor: 'rgba(255, 255, 255, 0.95)',
//           margin: 'auto'
//         }}>
//           {/* Navbar-like Box */}
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               background: 'linear-gradient(90deg, #005f73, #48A6A7)',
//               padding: '16px 32px',
//               borderRadius: '12px',
//               boxShadow: 4,
//               marginBottom: 4,
//             }}
//           >
//             <Typography
//               variant="h4"
//               align="center"
//               sx={{
//                 color: 'white',
//                 fontWeight: 'bold',
//                 textTransform: 'uppercase',
//                 letterSpacing: 1,
//               }}
//             >
//               Welcome to the Dashboard
//             </Typography>
//           </Box>


//           {/* Cards Grid Layout */}
//           <Grid container spacing={4} justifyContent="center">
//             {cards.map((card, index) => (
//               <Grid item xs={12} sm={6} md={6} lg={6} key={card.id}>
//                 <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
//                   <Card sx={{
//                     height: '370',
//                     maxWidth: 500, // 👈 Optional: limits width a bit
//                     margin: 'auto', // 👈 Centered if width limited
//                     display: 'flex',
//                     flexDirection: 'column',
//                     boxShadow: 4,
//                     borderRadius: 3,
//                     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                     '&:hover': {
//                       transform: 'scale(1.08)',
//                       boxShadow: 8
//                     }
//                   }}>
//                     <CardMedia
//                       component="img"
//                       sx={{
//                         height: 250,
//                         width: '100%',
//                         objectFit: 'cover',
//                         borderTopLeftRadius: '4px',
//                         borderTopRightRadius: '4px'
//                       }}
//                       image={card.image}
//                       alt={card.title}
//                     />
//                     <CardContent sx={{ flexGrow: 1 }}>
//                       <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
//                         {card.title}
//                       </Typography>
//                       <Typography variant="body1" color="text.secondary">
//                         {card.description}
//                       </Typography>
//                     </CardContent>
//                     <Box sx={{ p: 2, textAlign: 'center' }}>
//                       <Button
//                         variant="contained"
//                         fullWidth
//                         size="medium"
//                         onClick={() => handleCardClick(card.path)}
//                         sx={{
//                           backgroundColor: '#48A6A7',
//                           fontSize: '0.9rem',
//                           fontWeight: 'bold',
//                           '&:hover': {
//                             backgroundColor: '#48A6A7'
//                           }
//                         }}
//                       >
//                         Go to {card.title}
//                       </Button>
//                     </Box>
//                   </Card>
//                 </Zoom>
//               </Grid>
//             ))}
//           </Grid>
//         </Card>
//       </Box>

//       {/* Footer Component */}
//       <Box>

//       </Box>
//     </>
//   );
// }

// export default Dashboard;


















// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Box,
//   Zoom,
//   CircularProgress,
// } from "@mui/material";
// import { signOut } from "firebase/auth";
// import { auth, db } from "./firebase"; // Ensure you export db and auth from your firebase config
// import { useNavigate } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";

// import AdoptionImage from "../images/Adoption.png";
// import AmbulanceImage from "../images/Ambulance.jpeg";
// import MissingImage from "../images/MissingPerson.jpg";
// import ReportImage from "../images/Reports.png";

// const cards = [
//   {
//     id: 1,
//     title: "Adoption",
//     description: "Manage children adoption requests.",
//     image: AdoptionImage,
//     path: "/adoption",
//   },
//   {
//     id: 2,
//     title: "Ambulance Drivers",
//     description: "Manage ambulance driver records",
//     image: AmbulanceImage,
//     path: "/ambulance-drivers",
//   },
//   {
//     id: 3,
//     title: "Missing Persons",
//     description: "Find missing person present at Edhi foundation",
//     image: MissingImage,
//     path: "/missing",
//   },
//   {
//     id: 4,
//     title: "Reports",
//     description: "Generate and download reports.",
//     image: ReportImage,
//     path: "/service-unavailable",
//   },
// ];

// function Dashboard() {
//   const navigate = useNavigate();

//   // State for counts (example to fetch realtime counts from Firestore)
//   const [adoptionCount, setAdoptionCount] = useState(null);
//   const [missingCount, setMissingCount] = useState(null);
//   const [loadingCounts, setLoadingCounts] = useState(true);

//   useEffect(() => {
//     const fetchCounts = async () => {
//       try {
//         // Fetch adoption requests count
//         const adoptionSnapshot = await getDocs(collection(db, "adoptionRequests"));
//         setAdoptionCount(adoptionSnapshot.size);

//         // Fetch missing persons count
//         const missingSnapshot = await getDocs(collection(db, "missingPersons"));
//         setMissingCount(missingSnapshot.size);
//       } catch (error) {
//         console.error("Error fetching counts:", error);
//       } finally {
//         setLoadingCounts(false);
//       }
//     };

//     fetchCounts();
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/login");
//   };

//   const handleCardClick = (path) => {
//     navigate(path);
//   };

//   if (loadingCounts) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <>
//       <Box
//         sx={{
//           p: 3,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           minHeight: "100vh",
//           backgroundColor: "#ffffff",
//           boxShadow: 3,
//           background: "linear-gradient(to bottom right, #cce5ff, #ffffff)",
//         }}
//       >
//         {/* Navbar-like Box */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             width: "100%",
//             maxWidth: 1200,
//             background: "linear-gradient(90deg, #005f73, #48A6A7)",
//             padding: "16px 32px",
//             borderRadius: "12px",
//             boxShadow: 4,
//             marginBottom: 4,
//             color: "white",
//             fontWeight: "bold",
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               textTransform: "uppercase",
//               letterSpacing: 1,
//             }}
//           >
//             Welcome to the Dashboard
//           </Typography>

//           <Button
//             variant="outlined"
//             color="inherit"
//             onClick={handleLogout}
//             sx={{ fontWeight: "bold" }}
//           >
//             Logout
//           </Button>
//         </Box>

//         {/* Cards Grid Layout */}
//         <Grid container spacing={4} justifyContent="center" maxWidth={1200}>
//           {cards.map((card, index) => {
//             // Show count badges on Adoption and Missing cards
//             let countBadge = null;
//             if (card.title === "Adoption" && adoptionCount !== null) {
//               countBadge = adoptionCount;
//             } else if (card.title === "Missing Persons" && missingCount !== null) {
//               countBadge = missingCount;
//             }

//             return (
//               <Grid item xs={12} sm={6} md={6} lg={6} key={card.id}>
//                 <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
//                   <Card
//                     sx={{
//                       height: 370,
//                       maxWidth: 500,
//                       margin: "auto",
//                       display: "flex",
//                       flexDirection: "column",
//                       boxShadow: 4,
//                       borderRadius: 3,
//                       position: "relative",
//                       transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                       "&:hover": {
//                         transform: "scale(1.08)",
//                         boxShadow: 8,
//                         cursor: "pointer",
//                       },
//                     }}
//                     onClick={() => handleCardClick(card.path)}
//                   >
//                     <CardMedia
//                       component="img"
//                       sx={{
//                         height: 250,
//                         width: "100%",
//                         objectFit: "cover",
//                         borderTopLeftRadius: "4px",
//                         borderTopRightRadius: "4px",
//                       }}
//                       image={card.image}
//                       alt={card.title}
//                     />

//                     {countBadge !== null && (
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           top: 12,
//                           right: 12,
//                           backgroundColor: "#48A6A7",
//                           color: "white",
//                           px: 2,
//                           py: 0.5,
//                           borderRadius: "16px",
//                           fontWeight: "bold",
//                           fontSize: "1rem",
//                           userSelect: "none",
//                           boxShadow: "0 0 8px rgba(72, 166, 167, 0.7)",
//                         }}
//                       >
//                         {countBadge}
//                       </Box>
//                     )}

//                     <CardContent sx={{ flexGrow: 1 }}>
//                       <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
//                         {card.title}
//                       </Typography>
//                       <Typography variant="body1" color="text.secondary">
//                         {card.description}
//                       </Typography>
//                     </CardContent>

//                     <Box sx={{ p: 2, textAlign: "center" }}>
//                       <Button
//                         variant="contained"
//                         fullWidth
//                         size="medium"
//                         sx={{
//                           backgroundColor: "#48A6A7",
//                           fontSize: "0.9rem",
//                           fontWeight: "bold",
//                           "&:hover": {
//                             backgroundColor: "#379393",
//                           },
//                         }}
//                         onClick={() => handleCardClick(card.path)}
//                       >
//                         Go to {card.title}
//                       </Button>
//                     </Box>
//                   </Card>
//                 </Zoom>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Box>
//     </>
//   );
// }

// export default Dashboard;



// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Box,
//   Zoom,
//   CircularProgress,
// } from "@mui/material";
// import { signOut } from "firebase/auth";
// import { auth, db } from "./firebase"; // Make sure db and auth are properly exported from your firebase.js
// import { useNavigate } from "react-router-dom";
// import { collection, onSnapshot } from "firebase/firestore";

// import AdoptionImage from "../images/Adoption.png";
// import AmbulanceImage from "../images/Ambulance.jpeg";
// import MissingImage from "../images/MissingPerson.jpg";
// import ReportImage from "../images/Reports.png";

// const cards = [
//   {
//     id: 1,
//     title: "Adoption",
//     description: "Manage children adoption requests.",
//     image: AdoptionImage,
//     path: "/adoption",
//   },
//   {
//     id: 2,
//     title: "Ambulance Drivers",
//     description: "Manage ambulance driver records",
//     image: AmbulanceImage,
//     path: "/ambulance-drivers",
//   },
//   {
//     id: 3,
//     title: "Missing Persons",
//     description: "Find missing person present at Edhi foundation",
//     image: MissingImage,
//     path: "/missing",
//   },
//   {
//     id: 4,
//     title: "Reports",
//     description: "Generate and download reports.",
//     image: ReportImage,
//     path: "/service-unavailable",
//   },
// ];

// function Dashboard() {
//   const navigate = useNavigate();

//   const [adoptionCount, setAdoptionCount] = useState(null);
//   const [missingCount, setMissingCount] = useState(null);
//   const [loadingCounts, setLoadingCounts] = useState(true);

//   useEffect(() => {
//     setLoadingCounts(true);

//     const adoptionCol = collection(db, "adoptionRequests");
//     const missingCol = collection(db, "missingPersons");

//     const unsubscribeAdoption = onSnapshot(
//       adoptionCol,
//       (snapshot) => {
//         setAdoptionCount(snapshot.size);
//         setLoadingCounts(false);
//       },
//       (error) => {
//         console.error("Adoption snapshot error:", error);
//         setLoadingCounts(false);
//       }
//     );

//     const unsubscribeMissing = onSnapshot(
//       missingCol,
//       (snapshot) => {
//         setMissingCount(snapshot.size);
//         setLoadingCounts(false);
//       },
//       (error) => {
//         console.error("Missing snapshot error:", error);
//         setLoadingCounts(false);
//       }
//     );

//     return () => {
//       unsubscribeAdoption();
//       unsubscribeMissing();
//     };
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/login");
//   };

//   const handleCardClick = (path) => {
//     navigate(path);
//   };

//   if (loadingCounts) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <>
//       <Box
//         sx={{
//           p: 3,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           minHeight: "100vh",
//           backgroundColor: "#ffffff",
//           boxShadow: 3,
//           background: "linear-gradient(to bottom right, #cce5ff, #ffffff)",
//         }}
//       >
//         {/* Navbar-like Box */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             width: "100%",
//             maxWidth: 1200,
//             background: "linear-gradient(90deg, #005f73, #48A6A7)",
//             padding: "16px 32px",
//             borderRadius: "12px",
//             boxShadow: 4,
//             marginBottom: 4,
//             color: "white",
//             fontWeight: "bold",
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               textTransform: "uppercase",
//               letterSpacing: 1,
//             }}
//           >
//             Welcome to the Dashboard
//           </Typography>

//           <Button
//             variant="outlined"
//             color="inherit"
//             onClick={handleLogout}
//             sx={{ fontWeight: "bold" }}
//           >
//             Logout
//           </Button>
//         </Box>

//         {/* Cards Grid Layout */}
//         <Grid container spacing={4} justifyContent="center" maxWidth={1200}>
//           {cards.map((card, index) => {
//             // Show count badges on Adoption and Missing cards
//             let countBadge = null;
//             if (card.title === "Adoption" && adoptionCount !== null) {
//               countBadge = adoptionCount;
//             } else if (card.title === "Missing Persons" && missingCount !== null) {
//               countBadge = missingCount;
//             }

//             return (
//               <Grid item xs={12} sm={6} md={6} lg={6} key={card.id}>
//                 <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
//                   <Card
//                     sx={{
//                       height: 370,
//                       maxWidth: 500,
//                       margin: "auto",
//                       display: "flex",
//                       flexDirection: "column",
//                       boxShadow: 4,
//                       borderRadius: 3,
//                       position: "relative",
//                       transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                       "&:hover": {
//                         transform: "scale(1.08)",
//                         boxShadow: 8,
//                         cursor: "pointer",
//                       },
//                     }}
//                     onClick={() => handleCardClick(card.path)}
//                   >
//                     <CardMedia
//                       component="img"
//                       sx={{
//                         height: 250,
//                         width: "100%",
//                         objectFit: "cover",
//                         borderTopLeftRadius: "4px",
//                         borderTopRightRadius: "4px",
//                       }}
//                       image={card.image}
//                       alt={card.title}
//                     />

//                     {countBadge !== null && (
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           top: 12,
//                           right: 12,
//                           backgroundColor: "#48A6A7",
//                           color: "white",
//                           px: 2,
//                           py: 0.5,
//                           borderRadius: "16px",
//                           fontWeight: "bold",
//                           fontSize: "1rem",
//                           userSelect: "none",
//                           boxShadow: "0 0 8px rgba(72, 166, 167, 0.7)",
//                         }}
//                       >
//                         {countBadge}
//                       </Box>
//                     )}

//                     <CardContent sx={{ flexGrow: 1 }}>
//                       <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
//                         {card.title}
//                       </Typography>
//                       <Typography variant="body1" color="text.secondary">
//                         {card.description}
//                       </Typography>
//                     </CardContent>

//                     <Box sx={{ p: 2, textAlign: "center" }}>
//                       <Button
//                         variant="contained"
//                         fullWidth
//                         size="medium"
//                         sx={{
//                           backgroundColor: "#48A6A7",
//                           fontSize: "0.9rem",
//                           fontWeight: "bold",
//                           "&:hover": {
//                             backgroundColor: "#379393",
//                           },
//                         }}
//                         onClick={() => handleCardClick(card.path)}
//                       >
//                         Go to {card.title}
//                       </Button>
//                     </Box>
//                   </Card>
//                 </Zoom>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Box>
//     </>
//   );
// }

// export default Dashboard;
import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Zoom,
  CircularProgress,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { auth, db } from "./firebase"; // Make sure db and auth are properly exported from your firebase.js
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";

import AdoptionImage from "../images/Adoption.png";
import AmbulanceImage from "../images/Ambulance.jpeg";
import MissingImage from "../images/MissingPerson.jpg";
import ReportImage from "../images/Reports.png";

const cards = [
  {
    id: 1,
    title: "Adoption",
    description: "Manage children adoption requests.",
    image: AdoptionImage,
    path: "/adoption",
  },
  {
    id: 2,
    title: "Ambulance Drivers",
    description: "Manage ambulance driver records",
    image: AmbulanceImage,
    path: "/ambulance-drivers",
  },
  {
    id: 3,
    title: "Missing Persons",
    description: "Find missing person present at Edhi foundation",
    image: MissingImage,
    path: "/missing",
  },
  {
    id: 4,
    title: "Reports",
    description: "Generate and download reports.",
    image: ReportImage,
    path: "/service-unavailable",
  },
];

function Dashboard() {
  const navigate = useNavigate();

  const [adoptionCount, setAdoptionCount] = useState(null);
  const [missingCount, setMissingCount] = useState(null);
  const [loadingCounts, setLoadingCounts] = useState(true);

  useEffect(() => {
    setLoadingCounts(true);

    const adoptionCol = collection(db, "adoptionApplications"); // Corrected collection name
    const missingCol = collection(db, "missingPersons");

    const unsubscribeAdoption = onSnapshot(
      adoptionCol,
      (snapshot) => {
        setAdoptionCount(snapshot.size);
        setLoadingCounts(false);
      },
      (error) => {
        console.error("Adoption snapshot error:", error);
        setLoadingCounts(false);
      }
    );

    const unsubscribeMissing = onSnapshot(
      missingCol,
      (snapshot) => {
        setMissingCount(snapshot.size);
        setLoadingCounts(false);
      },
      (error) => {
        console.error("Missing snapshot error:", error);
        setLoadingCounts(false);
      }
    );

    return () => {
      unsubscribeAdoption();
      unsubscribeMissing();
    };
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  if (loadingCounts) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#ffffff",
          boxShadow: 3,
          background: "linear-gradient(to bottom right, #cce5ff, #ffffff)",
        }}
      >
        {/* Navbar-like Box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: 1200,
            background: "linear-gradient(90deg, #005f73, #48A6A7)",
            padding: "16px 32px",
            borderRadius: "12px",
            boxShadow: 4,
            marginBottom: 4,
            color: "white",
            fontWeight: "bold",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Welcome to the Dashboard
          </Typography>

          <Button
            variant="outlined"
            color="inherit"
            onClick={handleLogout}
            sx={{ fontWeight: "bold" }}
          >
            Logout
          </Button>
        </Box>

        {/* Cards Grid Layout */}
        <Grid container spacing={4} justifyContent="center" maxWidth={1200}>
          {cards.map((card, index) => {
            // Show count badges on Adoption and Missing cards
            let countBadge = null;
            if (card.title === "Adoption" && adoptionCount !== null) {
              countBadge = adoptionCount;
            } else if (card.title === "Missing Persons" && missingCount !== null) {
              countBadge = missingCount;
            }

            return (
              <Grid item xs={12} sm={6} md={6} lg={6} key={card.id}>
                <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Card
                    sx={{
                      height: 370,
                      maxWidth: 500,
                      margin: "auto",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: 4,
                      borderRadius: 3,
                      position: "relative",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.08)",
                        boxShadow: 8,
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => handleCardClick(card.path)}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: 250,
                        width: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: "4px",
                        borderTopRightRadius: "4px",
                      }}
                      image={card.image}
                      alt={card.title}
                    />

                    {countBadge !== null && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          backgroundColor: "#48A6A7",
                          color: "white",
                          px: 2,
                          py: 0.5,
                          borderRadius: "16px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          userSelect: "none",
                          boxShadow: "0 0 8px rgba(72, 166, 167, 0.7)",
                        }}
                      >
                        {countBadge}
                      </Box>
                    )}

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }}>
                        {card.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {card.description}
                      </Typography>
                    </CardContent>

                    <Box sx={{ p: 2, textAlign: "center" }}>
                      <Button
                        variant="contained"
                        fullWidth
                        size="medium"
                        sx={{
                          backgroundColor: "#48A6A7",
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                          "&:hover": {
                            backgroundColor: "#379393",
                          },
                        }}
                        onClick={() => handleCardClick(card.path)}
                      >
                        Go to {card.title}
                      </Button>
                    </Box>
                  </Card>
                </Zoom>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
