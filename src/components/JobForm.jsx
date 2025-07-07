import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  MenuItem,
} from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
function JobForm() {
  return (
    <Box sx={{ width: "100%", height: "100%", p: 1 }}>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5, fontWeight: 550 }}>
              Start Date
            </Typography>
            <TextField fullWidth size="small" variant="filled" type="date" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5, fontWeight: 550 }}>
              Substantial Completion Date
            </Typography>
            <TextField fullWidth size="small" variant="filled" type="date" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5, fontWeight: 550 }}>
              FInal Completion Date
            </Typography>
            <TextField fullWidth size="small" variant="filled" type="date" />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5, fontWeight: 550 }}>
              Construction Type
            </Typography>
            <TextField fullWidth select size="small">
              <MenuItem value="">Select Representative</MenuItem>
              <MenuItem value="rep1">Representative 1</MenuItem>
              <MenuItem value="rep2">Representative 2</MenuItem>
            </TextField>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5, fontWeight: 550 }}>
              Contract Type
            </Typography>
            <TextField fullWidth select size="small">
              <MenuItem value="">Select Representative</MenuItem>
              <MenuItem value="rep1">Representative 1</MenuItem>
              <MenuItem value="rep2">Representative 2</MenuItem>
            </TextField>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5, fontWeight: 550 }}>
              Square Foot
            </Typography>
            <TextField fullWidth select size="small">
              <MenuItem value="">Select Representative</MenuItem>
              <MenuItem value="rep1">Representative 1</MenuItem>
              <MenuItem value="rep2">Representative 2</MenuItem>
            </TextField>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5, fontWeight: 550 }}>
              Vertical Market Type
            </Typography>
            <TextField fullWidth select size="small">
              <MenuItem value="">Select Representative</MenuItem>
              <MenuItem value="rep1">Representative 1</MenuItem>
              <MenuItem value="rep2">Representative 2</MenuItem>
            </TextField>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5, fontWeight: 550 }}>
              LEED Certification Level
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter LEED Certification Level"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5, fontWeight: 550 }}>Bid Type</Typography>
            <TextField fullWidth select size="small">
              <MenuItem value="">Select Representative</MenuItem>
              <MenuItem value="rep1">Representative 1</MenuItem>
              <MenuItem value="rep2">Representative 2</MenuItem>
            </TextField>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Box sx={{ mb: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 550 }}>
                Project Manager
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 550 }}>
              Sales Tax/Additional Fee
            </Typography>
            <Box sx={{ mb: 2 }}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="other"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default JobForm;
