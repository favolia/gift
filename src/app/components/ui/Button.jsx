const Button = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={`text-sm text-white w-fit bg-black py-2 px-4 rounded-md ${className ?? ''}`}>
            {children}
        </button>
    )
}

export default Button