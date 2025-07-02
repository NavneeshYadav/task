function BillingForm() {
  return (
    <div className="container-1">
      <div className="form-wrapper">
        <form>
          <h3>Form - Billing</h3>
          <div>
            <label>Billing Code</label>
            <input type="text" placeholder="Enter billing code" />
          </div>
          <div>
            <label>Amount</label>
            <input type="number" placeholder="Enter amount" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BillingForm;
