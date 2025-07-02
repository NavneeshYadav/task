import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";
import BillingForm from "./components/BillingForm";
import FeeForm from "./components/FeeForm";
import JobForm from "./components/JobForm";
import AttachmentForm from "./components/AttachmentForm";
import AddForm from "./components/AddForm";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const tabStyle = {
    textTransform: "none",
    borderRadius: "4px 4px 0 0",
    mx: 0.5,
    "&.Mui-selected": {
      backgroundColor: "white",
      color: "primary.main",
      border: "1px solid #ccc",
      borderBottom: "none",
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            bgcolor: "#ebebeb",
            pt: 2,
            px: 1,
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab
            label="Project And Client Information"
            {...a11yProps(0)}
            sx={tabStyle}
          />
          <Tab label="Additional Contact" {...a11yProps(1)} sx={tabStyle} />
          <Tab label="Billing" {...a11yProps(2)} sx={tabStyle} />
          <Tab label="Fee Exculsion" {...a11yProps(3)} sx={tabStyle} />
          <Tab label="Job Setup" {...a11yProps(4)} sx={tabStyle} />
          <Tab label="Attachments" {...a11yProps(5)} sx={tabStyle} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProductForm />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AddForm />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <BillingForm />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <FeeForm />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        <JobForm />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={5}>
        <AttachmentForm />
      </CustomTabPanel>
    </Box>
  );
}
