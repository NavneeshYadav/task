function InfoSave() {
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#e0e0e0",
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
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="outlined" color="primary">
          Next
        </Button>
      </Stack>
    </Box>
  );
}

export default InfoSave;
