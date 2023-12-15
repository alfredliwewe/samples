function MyApp() {
    const login = (event) => {
        event.preventDefault();
    }
    
    return <>
        <h1>Hello, world!</h1>
        <form onSubmit={login}>
            <p>
                Enter Email
                <input type="text" placeholder="Email" />
            </p>
            <p>
                Password
                <input type="text" placeholder="Email" />
            </p>
            <p>
                <button type="submit">Login Now</button>
            </p>
        </form>
    </>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);