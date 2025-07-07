import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";

function FeeForm() {
  const boxStyle = {
    p: 3,
    backgroundColor: "#f9f9f9",
    borderRadius: 2,
    height: "100%",
  };

  const formGroupStyle = {
    border: "1px solid #ccc",
    pt: 2,
    pb: 2,
    pl: 3,
  };

  const checkStyle = {
    borderBottom: "1px solid #ccc",
  };

  return (
    <Box sx={{ width: "100%", height: "100vh", p: 2 }}>
      <Grid container spacing={2}>
        {/* Box 1 */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Box sx={boxStyle}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Exclude the Quoted Fees
            </Typography>
            <FormGroup sx={formGroupStyle}>
              {[
                "General Requirements",
                "Pre Constitution",
                "General Conditions",
                "Contigency",
                "Insurance",
                "Retails Sales Tax",
                "P & P Bond",
                "Builders Risk",
              ].map((label, i) => (
                <FormControlLabel
                  key={label}
                  sx={i < 7 ? checkStyle : {}}
                  control={<Checkbox />}
                  label={label}
                />
              ))}
            </FormGroup>
          </Box>
        </Grid>

        {/* Box 2 and 3 */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Box sx={boxStyle}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Exclude the Project Contigency
                </Typography>
                <FormGroup sx={formGroupStyle}>
                  <FormControlLabel
                    sx={checkStyle}
                    control={<Checkbox />}
                    label="Pre Constitution"
                  />
                  <FormControlLabel
                    sx={checkStyle}
                    control={<Checkbox />}
                    label="General Conditions"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Retails Sales Tax"
                  />
                </FormGroup>
              </Box>
            </Grid>

            <Grid item>
              <Box sx={boxStyle}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Exclude the Escalation Contigency
                </Typography>
                <FormGroup sx={formGroupStyle}>
                  <FormControlLabel
                    sx={checkStyle}
                    control={<Checkbox />}
                    label="Pre Constitution"
                  />
                  <FormControlLabel
                    sx={checkStyle}
                    control={<Checkbox />}
                    label="General Conditions"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Retails Sales Tax"
                  />
                </FormGroup>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Box 4 and 5 */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "100%", md: "30%" } }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Box sx={boxStyle}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Exclude the Design Contigency
                </Typography>
                <FormGroup sx={formGroupStyle}>
                  <FormControlLabel
                    sx={checkStyle}
                    control={<Checkbox />}
                    label="Pre Constitution"
                  />
                  <FormControlLabel
                    sx={checkStyle}
                    control={<Checkbox />}
                    label="General Conditions"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Retails Sales Tax"
                  />
                </FormGroup>
              </Box>
            </Grid>

            <Grid item>
              <Box sx={boxStyle}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Bid Total Options
                </Typography>
                <FormGroup sx={formGroupStyle}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Exclude General Requirements from Direct Costs"
                  />
                </FormGroup>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeeForm;
