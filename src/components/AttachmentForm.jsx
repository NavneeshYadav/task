function AttachmentForm() {
  return (
    <div className="container-1">
      <div className="form-wrapper">
        <form>
          <h3>Attachments</h3>
          <div>
            <label>Attachment Title</label>
            <input type="text" placeholder="Enter title" />
          </div>
          <div>
            <label>Upload File</label>
            <input type="file" />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default AttachmentForm;
