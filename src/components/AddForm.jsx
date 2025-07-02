import { useState } from "react";

function AddForm() {

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

  return (
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
              {formErrors.email && <p className="error">{formErrors.email}</p>}
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
                {formErrors.city && <p className="error">{formErrors.city}</p>}
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
  );
}

export default AddForm;
