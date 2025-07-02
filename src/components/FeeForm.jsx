import React from "react";
import { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

function FeeForm() {
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!reason) newErrors.reason = "Reason is required";
    if (!notes) newErrors.notes = "Notes are required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Submitted:", { reason, notes });
    }
  };
  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{ width: 300, p: 3, borderRadius: 2, backgroundColor: "#f9f9f9" }}
        elevation={3}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Fee Exclusion
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Reason</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter reason"
            variant="outlined"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            error={!!errors.reason}
            helperText={errors.reason}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Notes</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Additional notes"
            variant="outlined"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            error={!!errors.notes}
            helperText={errors.notes}
          />
        </Box>

        <Button fullWidth variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    </Box>
  );
}

export default FeeForm;
