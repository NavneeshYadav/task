import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import React, { useState } from "react";
function BillingForm() {
  const [billingCode, setBillingCode] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!billingCode) newErrors.billingCode = "Billing code is required";
    if (!amount) newErrors.amount = "Amount is required";
    else if (isNaN(amount) || parseFloat(amount) <= 0)
      newErrors.amount = "Enter a valid amount";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Submitted:", { billingCode, amount });
    }
  };

  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{ width: 300, p: 3, borderRadius: 2, backgroundColor: "#f9f9f9" }}
        elevation={3}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Billing
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
            Billing Code
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter billing code"
            variant="outlined"
            value={billingCode}
            onChange={(e) => setBillingCode(e.target.value)}        
            error={!!errors.billingCode}
            helperText={errors.billingCode}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 0.5, fontWeight: 500 }}>Amount</Typography>
          <TextField
            fullWidth
            size="small"
            type="number"
            placeholder="Enter amount"
            variant="outlined"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} 
            error={!!errors.amount}
            helperText={errors.amount}
          />
        </Box>

        <Button fullWidth variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    </Box>
  );
}

export default BillingForm;
