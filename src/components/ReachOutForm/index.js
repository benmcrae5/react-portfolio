import React , { useState } from 'react';

const ReachOut = ({ currentPage, handlePages }) => {
    const [error, setError] = useState()

    const onSubmit = (event) => {
        event.preventDefault();
        return false;
    }

    const validate = (value) => {
        if (!value) {
            return setError("This value is required");
        }
    }

    const valueChange = (event) => {
        const { value } = event.target;
        validate(value);
    };

    return (
        <div className="ReachOut">
           <div className="container mt-3">
                <form onSubmit={onSubmit}>
                    <div className="input-group">
                        <label htmlFor="input-name" className="form-label">Name:</label>
                        <input type="text" id="input-name" className="form-control" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="input-email" className="form-label">Your Email:</label>
                        <input type="text" id="input-email" className="form-control" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="inpute-message" className="form-label">Enter your message here:</label>
                        <textarea type="text" id="inpute-message" className="form-control" />
                    </div>
                    <div className="input-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
           </div>
        </div>
    )
}

export default ReachOut;