import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
function FeeForm() {
  const boxStyle = {
    p: 3,
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
    <Box sx={{ width: "100%", height: "100%", p: 1 }}>
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

      {/* Info and Buttons Section */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#ebebeb",
          p: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <InfoOutlinedIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="body1">
            Fee Exclusions can be editable by Project Accountant
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ width: "100%", justifyContent: { sm: "flex-end" }, mt: 2 }}
        >
          <Button
            variant="outlined"
            color="primary"
            sx={{ border: "2px solid #1976d2" }}
          >
            Save
          </Button>
          <Button variant="contained" color="primary">
            Next <ArrowRightAltIcon sx={{ ml: 1 }} />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default FeeForm;
