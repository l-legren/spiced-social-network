const Logo = () => {
    return (
        <div style={{ display: "flex", marginLeft: 38 }}>
            <img
                style={{ height: 100, width: "auto", border: "none" }}
                src="logo.png"
            />
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h1 style={{ padding: 0, margin: 0 }}>mySocial</h1>
            </div>
        </div>
    );
};

export default Logo;
