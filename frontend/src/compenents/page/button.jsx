import React from 'react'

function button(id, click, icon, text) {
    return (
        <div className="thisButton text-center w-100">
            <button className="btn text-white w-100" id={id} onClick={click}>
                {icon}
                {text}
            </button>
        </div>
    )
}

export default button
