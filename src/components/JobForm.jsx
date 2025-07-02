import React from "react";
import { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

function JobForm() {
  const [jobId, setJobId] = useState("");
  const [desc, setDesc] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!jobId) newErrors.jobId = "Job ID is required";
    if (!desc) newErrors.desc = "Description is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Submitted:", { jobId, desc });
    }
  };
  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{ width: 300, p: 3, borderRadius: 2, backgroundColor: "#f9f9f9" }}
        elevation={3}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Job Setup
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Job ID</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter job ID"
            variant="outlined"
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}
            error={!!errors.jobId}
            helperText={errors.jobId}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Description</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter description"
            variant="outlined"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}       
            error={!!errors.desc}
            helperText={errors.desc}
          />
        </Box>

        <Button fullWidth variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    </Box>
  );
}

export default JobForm;
