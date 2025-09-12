import React from "react";
import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#48A6A7", // Dark blue theme
        color: "#fff",
        padding: "40px 20px",
        mt: 5,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        
        {/* Logo / About */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold">
            Saya-e-Falah Dashboard
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "#bbdefb" }}>
            Final Year Project | Batch SE22
            <br />
            Powered by Edhi Welfare Organization
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" fontWeight="bold">
            Quick Links
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {["Home", "News", "About", "Contact Us", "Our Team"].map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                sx={{
                  color: "#bbdefb",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "#ffeb3b", pl: 1 },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" fontWeight="bold">
            Follow Us
          </Typography>
          <Box sx={{ mt: 1 }}>
            {[
              { icon: <Facebook />, color: "#1877F2" },
              { icon: <Instagram />, color: "#E1306C" },
              { icon: <Twitter />, color: "#1DA1F2" },
              { icon: <YouTube />, color: "#FF0000" },
            ].map((social, i) => (
              <IconButton
                key={i}
                sx={{
                  color: "#bbdefb",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: social.color,
                    transform: "scale(1.2)",
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Line */}
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
          pt: 2,
          borderTop: "1px solid rgba(255,255,255,0.2)",
          color: "#bbdefb",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Saya-e-Falah. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
