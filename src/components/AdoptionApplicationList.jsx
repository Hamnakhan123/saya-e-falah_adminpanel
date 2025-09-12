import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";

function AdoptionApplicationsList() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "adoptionApplications"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setApplications(data);
      } catch (error) {
        console.error("Error fetching adoption applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return <Typography variant="h6">Loading applications...</Typography>;
  }

  if (applications.length === 0) {
    return <Typography variant="h6">No adoption applications found.</Typography>;
  }

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {applications.map(app => (
        <Grid item xs={12} sm={6} md={4} key={app.id}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 2 }}>
            {/* Gender Icon */}
            <div style={{ textAlign: "center", marginBottom: 10 }}>
              {app.gender?.toLowerCase() === "female" ? (
                <FemaleIcon sx={{ fontSize: 50, color: "pink" }} />
              ) : (
                <MaleIcon sx={{ fontSize: 50, color: "blue" }} />
              )}
            </div>

            <CardContent>
              <Typography variant="h6" gutterBottom>
                {app.name || "N/A"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: {app.phone || "N/A"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address: {app.address || "N/A"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gender: {app.gender || "N/A"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age: {app.age || "N/A"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Reason for Adoption: {app.reasonAdoption || "N/A"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Child Gender Preference: {app.childGenderPreference || "N/A"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Child Age Preference: {app.childAgePreference || "N/A"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Family Members: {app.familyMembers || "N/A"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Additional Info: {app.additionalInfo || "N/A"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: {app.status || "Pending"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default AdoptionApplicationsList;
