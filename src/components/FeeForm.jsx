function FeeForm() {
  return (
    <div className="container-1">
      <div className="form-wrapper">
        <form>
          <h3>Fee Exclusion</h3>
          <div>
            <label>Reason</label>
            <input type="text" placeholder="Enter reason" />
          </div>
          <div>
            <label>Notes</label>
            <input type="text" placeholder="Additional notes" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FeeForm;
