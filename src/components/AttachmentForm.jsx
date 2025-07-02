import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { useState } from "react";
function AttachmentForm() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!file) newErrors.file = "File is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Submitted:", { title, file });
    }
  };
  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{ width: 300, p: 3, borderRadius: 2, backgroundColor: "#f9f9f9" }}
        elevation={3}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Attachments
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
            Attachment Title
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={!!errors.title}
            helperText={errors.title}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Upload File</Typography>
          <TextField
            fullWidth
            size="small"
            type="file"
            variant="outlined"
            inputProps={{ accept: "*" }}
            onChange={(e) => setFile(e.target.files[0])}
            error={!!errors.file}
            helperText={errors.file}
          />
        </Box>

        <Button fullWidth variant="contained" onClick={handleSubmit}>
          Upload
        </Button>
      </Paper>
    </Box>
  );
}

export default AttachmentForm;
