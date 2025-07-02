import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  MenuItem,
  Grid,
} from "@mui/material";

function AddForm() {
  const [formData, setFormData] = useState({
    ownerRep: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const [architectForm, setArchitectForm] = useState({
    ownerRep: "",
    email: "",
    mailingName1: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
  });

  const [architectErrors, setArchitectErrors] = useState({});

  const handleInputChange = (e, setFn) => {
    const { name, value } = e.target;
    setFn((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (data, type) => {
    const errors = {};
    if (!data.ownerRep.trim())
      errors.ownerRep = "Owner Representative is required.";
    if (!data.address1.trim()) errors.address1 = "Address Line 1 is required.";
    if (!data.city.trim()) errors.city = "City is required.";

    if (data.email?.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) errors.email = "Invalid email format.";
    }

    if (type === "architect") {
      if (!data.mailingName1.trim())
        errors.mailingName1 = "Mailing Name is required.";
      if (!data.phone.trim()) errors.phone = "Phone number is required.";
    }

    return errors;
  };

  const handleSubmit = (e, data, setErrorFn, resetFn, type) => {
    e.preventDefault();
    const errors = validateForm(data, type);
    setErrorFn(errors);
    if (Object.keys(errors).length === 0) {
      alert(
        `${
          type === "architect" ? "Architect" : "Owner Rep"
        } form submitted successfully!`
      );
      resetFn({
        ownerRep: "",
        email: "",
        mailingName1: "",
        countryCode: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
      });
    }
  };

  const renderLabel = (text, required = false) => (
    <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
      {text} {required && <span style={{ color: "red" }}>*</span>}
    </Typography>
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {/* Owner Rep Form */}
        <Paper
          elevation={3}
          sx={{ width: 450, p: 3, borderRadius: 2, backgroundColor: "#f9f9f9" }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Owner Representative
          </Typography>

          <Box sx={{ mb: 2 }}>
            {renderLabel("Owner Representative", true)}
            <TextField
              fullWidth
              select
              size="small"
              name="ownerRep"
              value={formData.ownerRep}
              onChange={(e) => handleInputChange(e, setFormData)}
              error={!!formErrors.ownerRep}
              helperText={formErrors.ownerRep}
            >
              <MenuItem value="">Select Representative</MenuItem>
              <MenuItem value="rep1">John Doe</MenuItem>
              <MenuItem value="rep2">Jane Smith</MenuItem>
            </TextField>
          </Box>

          <Box sx={{ mb: 2 }}>
            {renderLabel("Email")}
            <TextField
              fullWidth
              size="small"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange(e, setFormData)}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            {renderLabel("Address Line 1", true)}
            <TextField
              fullWidth
              size="small"
              name="address1"
              value={formData.address1}
              onChange={(e) => handleInputChange(e, setFormData)}
              error={!!formErrors.address1}
              helperText={formErrors.address1}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            {renderLabel("Address Line 2")}
            <TextField
              fullWidth
              size="small"
              name="address2"
              value={formData.address2}
              onChange={(e) => handleInputChange(e, setFormData)}
            />
          </Box>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6} sx={{ width: 190 }}>
              {renderLabel("City", true)}
              <TextField
                select
                fullWidth
                size="small"
                name="city"
                value={formData.city}
                onChange={(e) => handleInputChange(e, setFormData)}
                error={!!formErrors.city}
                helperText={formErrors.city}
              >
                <MenuItem value="">Select City</MenuItem>
                <MenuItem value="bhopal">Bhopal</MenuItem>
                <MenuItem value="indore">Indore</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6} sx={{ width: 190 }}>
              {renderLabel("State")}
              <TextField
                select
                fullWidth
                size="small"
                name="state"
                value={formData.state}
                onChange={(e) => handleInputChange(e, setFormData)}
              >
                <MenuItem value="">Select State</MenuItem>
                <MenuItem value="mp">Madhya Pradesh</MenuItem>
                <MenuItem value="cg">Chhattisgarh</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            fullWidth
            onClick={(e) =>
              handleSubmit(e, formData, setFormErrors, setFormData, "owner")
            }
          >
            Submit
          </Button>
        </Paper>

        {/* Architect Form */}
        <Paper
          elevation={3}
          sx={{ width: 450, p: 3, borderRadius: 2, backgroundColor: "#f9f9f9" }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Architect Details
          </Typography>

          <Box sx={{ mb: 2 }}>
            {renderLabel("Owner Representative", true)}
            <TextField
              fullWidth
              select
              size="small"
              name="ownerRep"
              value={architectForm.ownerRep}
              onChange={(e) => handleInputChange(e, setArchitectForm)}
              error={!!architectErrors.ownerRep}
              helperText={architectErrors.ownerRep}
            >
              <MenuItem value="">Select Representative</MenuItem>
              <MenuItem value="rep1">John Doe</MenuItem>
              <MenuItem value="rep2">Jane Smith</MenuItem>
            </TextField>
          </Box>

          <Box sx={{ mb: 2 }}>
            {renderLabel("Email", true)}
            <TextField
              fullWidth
              size="small"
              name="email"
              value={architectForm.email}
              onChange={(e) => handleInputChange(e, setArchitectForm)}
              error={!!architectErrors.email}
              helperText={architectErrors.email}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            {renderLabel("Mailing Name", true)}
            <TextField
              fullWidth
              size="small"
              name="mailingName1"
              value={architectForm.mailingName1}
              onChange={(e) => handleInputChange(e, setArchitectForm)}
              error={!!architectErrors.mailingName1}
              helperText={architectErrors.mailingName1}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            {renderLabel("Phone", true)}
            <TextField
              fullWidth
              size="small"
              name="phone"
              value={architectForm.phone}
              onChange={(e) => handleInputChange(e, setArchitectForm)}
              error={!!architectErrors.phone}
              helperText={architectErrors.phone}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            {renderLabel("Address Line 1", true)}
            <TextField
              fullWidth
              size="small"
              name="address1"
              value={architectForm.address1}
              onChange={(e) => handleInputChange(e, setArchitectForm)}
              error={!!architectErrors.address1}
              helperText={architectErrors.address1}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            {renderLabel("Address Line 2")}
            <TextField
              fullWidth
              size="small"
              name="address2"
              value={architectForm.address2}
              onChange={(e) => handleInputChange(e, setArchitectForm)}
            />
          </Box>

          <Grid
            container
            spacing={2}
            sx={{ mb: 2, justifyContent: "space-between" }}
          >
            <Grid item xs={6} sx={{ width: 190 }}>
              {renderLabel("City", true)}
              <TextField
                select
                fullWidth
                size="small"
                name="city"
                value={architectForm.city}
                onChange={(e) => handleInputChange(e, setArchitectForm)}
                error={!!architectErrors.city}
                helperText={architectErrors.city}
              >
                <MenuItem value="">Select City</MenuItem>
                <MenuItem value="bhopal">Bhopal</MenuItem>
                <MenuItem value="indore">Indore</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6} sx={{ width: 190 }}>
              {renderLabel("State")}
              <TextField
                select
                fullWidth
                size="small"
                name="state"
                value={architectForm.state}
                onChange={(e) => handleInputChange(e, setArchitectForm)}
              >
                <MenuItem value="">Select State</MenuItem>
                <MenuItem value="mp">Madhya Pradesh</MenuItem>
                <MenuItem value="cg">Chhattisgarh</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            fullWidth
            onClick={(e) =>
              handleSubmit(
                e,
                architectForm,
                setArchitectErrors,
                setArchitectForm,
                "architect"
              )
            }
          >
            Submit
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default AddForm;
