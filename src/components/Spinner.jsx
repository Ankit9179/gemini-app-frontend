import React from 'react'

const Spinner = () => {
    return (
        <>
            <svg
                className="animate-spin h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
            >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path d="M4 12a8 8 0 018-8v8H4z" fill="currentColor"></path>
            </svg>
        </>
    )
}

export default Spinner