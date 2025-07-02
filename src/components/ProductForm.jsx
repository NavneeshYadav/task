import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

function ProductForm() {
  const [projectName, setProjectName] = React.useState("");
  const [clientName, setClientName] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!projectName) newErrors.projectName = "Project Name is required";
    if (!clientName) newErrors.clientName = "Client Name is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Submitted:", { projectName, clientName });
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: "40px" }}>
        <Paper
          elevation={3}
          sx={{
            width: 300,
            p: 3,
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Project Info
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
              Project Name
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Field 1"
              variant="outlined"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              error={!!errors.projectName}
              helperText={errors.projectName}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
              Client Name
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Field 2"
              variant="outlined"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              error={!!errors.clientName}
              helperText={errors.clientName}
            />
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default ProductForm;
