function JobForm() {
  return (
    <div className="container-1">
      <div className="form-wrapper">
        <form>
          <h3>Job Setup</h3>
          <div>
            <label>Job ID</label>
            <input type="text" placeholder="Enter job ID" />
          </div>
          <div>
            <label>Description</label>
            <input type="text" placeholder="Enter description" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default JobForm;
