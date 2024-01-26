import React from 'react'

function InputModalHotel({ label, type }) {
    return (
        <div className='col'>
            <label htmlFor="email" className="form-label">
                {label}
            </label>
            <input type={type} className="form-control  outline-none " id="email" placeholder="" />
        </div>
    )
}

export default InputModalHotel
