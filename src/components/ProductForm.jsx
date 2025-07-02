function ProductForm() {
  return (
    <div className="container-1">
      <div className="form-wrapper">
        <form>
          <h3>Project Info</h3>
          <div>
            <label>Project Name</label>
            <input type="text" placeholder="Field 1" />
          </div>
          <div>
            <label>Client Name</label>
            <input type="text" placeholder="Field 2" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
