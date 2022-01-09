function InputField() {
    return (
      <div className="input-field">
        <form>
          <label htmlFor="input-field">Search</label>
          <input
            type="text"
            placeholder="e.g. Manchester"
            id="input-field"
            name="input-field"
            >
          </input>
        </form>
      </div>
    );
  }

  export default InputField;