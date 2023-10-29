const Container = ({ children, className }) => {

    return (
        <main className={`flex flex-col w-full min-h-screen ${className ?? ''}`}>
            {children}
        </main>
    )
}

export default Container