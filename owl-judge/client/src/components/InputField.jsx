// InputField.jsx
// Standardizes input fields across all pages

function InputField({ label, type, value, onChange }) {
    return (
        <div className="mb-3">
            <label htmlFor={label}>{label}:</label>
            <input
                type={type}
                className="form-control"
                id={label}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default InputField;