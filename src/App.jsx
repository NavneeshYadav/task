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
  const [formData, setFormData] = useState({
    ownerRep: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.ownerRep.trim())
      errors.ownerRep = "Owner Representative is required.";
    if (!formData.address1.trim())
      errors.address1 = "Address Line 1 is required.";
    if (!formData.city.trim()) errors.city = "City is required.";

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = "Invalid email format.";
      }
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        ownerRep: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
      });
    }
  };
  const [architectForm, setArchitectForm] = useState({
    ownerRep: "",
    email: "",
    mailingName1: "",
    countryCode: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
  });

  const [architectErrors, setArchitectErrors] = useState({});
  const handleArchitectChange = (e) => {
    const { name, value } = e.target;
    setArchitectForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleArchitectSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!architectForm.ownerRep.trim())
      errors.ownerRep = "Owner Representative is required.";
    if (!architectForm.email.trim()) {
      errors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(architectForm.email))
        errors.email = "Invalid email format.";
    }

    if (!architectForm.mailingName1.trim())
      errors.mailingName1 = "Mailing Name is required.";
    if (!architectForm.countryCode.trim())
      errors.countryCode = "Country code is required.";
    if (!architectForm.phone.trim()) errors.phone = "Phone number is required.";
    if (!architectForm.address1.trim())
      errors.address1 = "Address Line 1 is required.";
    if (!architectForm.city.trim()) errors.city = "City is required.";

    setArchitectErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Architect form submitted successfully!");
      setArchitectForm({
        ownerRep: "",
        email: "",
        mailingName1: "",
        countryCode: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
      });
    }
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
        <div className="container-1">
          <div className="form-wrapper">
            <div className="row-1">
              <form onSubmit={handleFormSubmit}>
                <h3>Owner Representative</h3>

                <div>
                  <label>
                    Owner Representative <span className="required">*</span>
                  </label>
                  <select
                    name="ownerRep"
                    value={formData.ownerRep}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Representative</option>
                    <option value="rep1">John Doe</option>
                    <option value="rep2">Jane Smith</option>
                  </select>
                  {formErrors.ownerRep && (
                    <p className="error">{formErrors.ownerRep}</p>
                  )}
                </div>

                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                  />
                  {formErrors.email && (
                    <p className="error">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label>
                    Address Line 1 <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="address1"
                    value={formData.address1}
                    onChange={handleInputChange}
                    placeholder="Enter address line 1"
                  />
                  {formErrors.address1 && (
                    <p className="error">{formErrors.address1}</p>
                  )}
                </div>

                <div>
                  <label>Address Line 2</label>
                  <input
                    type="text"
                    name="address2"
                    value={formData.address2}
                    onChange={handleInputChange}
                    placeholder="Enter address line 2"
                  />
                </div>

                <div className="row-inline">
                  <div>
                    <label>
                      City <span className="required">*</span>
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    >
                      <option value="">Select City</option>
                      <option value="bhopal">Bhopal</option>
                      <option value="indore">Indore</option>
                    </select>
                    {formErrors.city && (
                      <p className="error">{formErrors.city}</p>
                    )}
                  </div>
                  <div>
                    <label>State</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                    >
                      <option value="">Select State</option>
                      <option value="mp">Madhya Pradesh</option>
                      <option value="cg">Chhattisgarh</option>
                    </select>
                  </div>
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>

            <div className="row-2">
              <form onSubmit={handleArchitectSubmit}>
                <h3>Architect Details</h3>

                <div>
                  <label>
                    Owner Representative <span className="required">*</span>
                  </label>
                  <select
                    name="ownerRep"
                    value={architectForm.ownerRep}
                    onChange={handleArchitectChange}
                  >
                    <option value="">Select Representative</option>
                    <option value="rep1">John Doe</option>
                    <option value="rep2">Jane Smith</option>
                  </select>
                  {architectErrors.ownerRep && (
                    <p className="error">{architectErrors.ownerRep}</p>
                  )}
                </div>

                <div>
                  <label>
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={architectForm.email}
                    onChange={handleArchitectChange}
                    placeholder="Enter email"
                  />
                  {architectErrors.email && (
                    <p className="error">{architectErrors.email}</p>
                  )}
                </div>

                <div>
                  <label>
                    Mailing Name 1 <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="mailingName1"
                    value={architectForm.mailingName1}
                    onChange={handleArchitectChange}
                    placeholder="Enter mailing name"
                  />
                  {architectErrors.mailingName1 && (
                    <p className="error">{architectErrors.mailingName1}</p>
                  )}
                </div>

                <div className="row-inline">
                  <div>
                    <label>
                      Country Code <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="countryCode"
                      value={architectForm.countryCode}
                      onChange={handleArchitectChange}
                      placeholder="+91"
                    />
                    {architectErrors.countryCode && (
                      <p className="error">{architectErrors.countryCode}</p>
                    )}
                  </div>
                  <div>
                    <label>
                      Phone No. <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={architectForm.phone}
                      onChange={handleArchitectChange}
                      placeholder="1234567890"
                    />
                    {architectErrors.phone && (
                      <p className="error">{architectErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label>
                    Address Line 1 <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="address1"
                    value={architectForm.address1}
                    onChange={handleArchitectChange}
                    placeholder="Enter address line 1"
                  />
                  {architectErrors.address1 && (
                    <p className="error">{architectErrors.address1}</p>
                  )}
                </div>

                <div>
                  <label>Address Line 2</label>
                  <input
                    type="text"
                    name="address2"
                    value={architectForm.address2}
                    onChange={handleArchitectChange}
                    placeholder="Enter address line 2"
                  />
                </div>

                <div className="row-inline">
                  <div>
                    <label>
                      City <span className="required">*</span>
                    </label>
                    <select
                      name="city"
                      value={architectForm.city}
                      onChange={handleArchitectChange}
                    >
                      <option value="">Select City</option>
                      <option value="bhopal">Bhopal</option>
                      <option value="indore">Indore</option>
                    </select>
                    {architectErrors.city && (
                      <p className="error">{architectErrors.city}</p>
                    )}
                  </div>

                  <div>
                    <label>State</label>
                    <select
                      name="state"
                      value={architectForm.state}
                      onChange={handleArchitectChange}
                    >
                      <option value="">Select State</option>
                      <option value="mp">Madhya Pradesh</option>
                      <option value="cg">Chhattisgarh</option>
                    </select>
                  </div>
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
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
