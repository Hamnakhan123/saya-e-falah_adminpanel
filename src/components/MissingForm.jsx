import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  IconButton,
  Tooltip,
  MenuItem,
} from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

function MissingForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    appearance: "",
    phone: "+92",
    additionalInfo: "",
    lastSeenDate: "",
    lastSeenTime: "",
    lastSeenLocation: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Validation rules
  const validators = {
    name: (val) =>
      /^[A-Za-z\s]+$/.test(val) || val === "" ? "" : "Only alphabets allowed",
    age: (val) =>
      /^\d+$/.test(val) && Number(val) > 0 && Number(val) <= 120
        ? ""
        : "Enter valid age (1–120)",
    gender: (val) => (val ? "" : "Please select gender"),
    phone: (val) =>
      /^\+92\d{10}$/.test(val) ? "" : "Format: +92XXXXXXXXXX",
    appearance: (val) =>
      /^[A-Za-z\s]*$/.test(val) ? "" : "Only alphabets allowed",
    additionalInfo: (val) =>
      /^[A-Za-z\s]*$/.test(val) ? "" : "Only alphabets allowed",
    lastSeenDate: (val) => (val ? "" : "Required"),
    lastSeenTime: (val) => (val ? "" : "Required"),
    lastSeenLocation: (val) =>
      /^[A-Za-z\s]+$/.test(val) || val === ""
        ? ""
        : "Only alphabets allowed",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Auto enforce rules for phone
    if (name === "phone") {
      if (!value.startsWith("+92")) {
        newValue = "+92" + value.replace(/\D/g, "");
      }
      // allow only digits after +92
      newValue = "+92" + value.replace(/\D/g, "").slice(2, 12);
    }

    // Enforce numeric limit for age
    if (name === "age") {
      newValue = value.replace(/\D/g, ""); // only digits
      if (Number(newValue) > 120) {
        newValue = "120";
      }
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
    setErrors((prev) => ({ ...prev, [name]: validators[name](newValue) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run all validations before submit
    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      newErrors[field] = validators[field](formData[field]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err !== "")) {
      alert("Please fix errors before submitting.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "missingPersons"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      alert("Missing person submitted successfully.");

      setFormData({
        name: "",
        age: "",
        gender: "",
        appearance: "",
        phone: "+92",
        additionalInfo: "",
        lastSeenDate: "",
        lastSeenTime: "",
        lastSeenLocation: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting missing person:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 650,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        position: "relative",
        bgcolor: "background.paper",
      }}
    >
      <Tooltip title="View Missing List">
        <IconButton
          onClick={() => navigate("/missing-list")}
          sx={{ position: "absolute", top: 16, right: 16 }}
          color="primary"
          size="large"
        >
          <ListAltIcon />
        </IconButton>
      </Tooltip>

      <Typography variant="h5" gutterBottom fontWeight="bold">
        Submit Missing Person
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          error={!!errors.name}
          helperText={errors.name}
        />

        <TextField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          error={!!errors.age}
          helperText={errors.age}
          inputProps={{ min: 1, max: 120 }}
        />

        <TextField
          select
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          error={!!errors.gender}
          helperText={errors.gender}
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Appearance (e.g. clothing, distinguishing features)"
          name="appearance"
          value={formData.appearance}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          multiline
          rows={2}
          placeholder="Optional"
          error={!!errors.appearance}
          helperText={errors.appearance}
        />

        <TextField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          error={!!errors.phone}
          helperText={errors.phone}
        />

        <TextField
          label="Additional Info"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          multiline
          rows={2}
          placeholder="Optional"
          error={!!errors.additionalInfo}
          helperText={errors.additionalInfo}
        />

        <TextField
          label="Last Seen Date"
          name="lastSeenDate"
          type="date"
          value={formData.lastSeenDate}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
          error={!!errors.lastSeenDate}
          helperText={errors.lastSeenDate}
        />

        <TextField
          label="Last Seen Time"
          name="lastSeenTime"
          type="time"
          value={formData.lastSeenTime}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
          error={!!errors.lastSeenTime}
          helperText={errors.lastSeenTime}
        />

        <TextField
          label="Last Seen Location"
          name="lastSeenLocation"
          value={formData.lastSeenLocation}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
          error={!!errors.lastSeenLocation}
          helperText={errors.lastSeenLocation}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          disabled={loading}
          sx={{ py: 1.5, fontWeight: "bold", mt: 2 }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Submit"}
        </Button>
      </form>
    </Box>
  );
}

export default MissingForm;
