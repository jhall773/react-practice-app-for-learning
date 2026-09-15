function Header ( {headerMode, showMessage, backdropColor, toggleMessage, toggleHeaderMode, toggleBackdrop} )
{
    return(
        <div>
            <button onClick={() => toggleMessage(!showMessage)}>
                Toggle Header Message
            </button>

            <header
                className={headerMode ? "App-header" : "App-header-light"}
                style={{ padding: "20px" }}
                >
                {showMessage && <h2>Hello Joseph! End of React Week 1!</h2>}
            </header>

            <button onClick={() => toggleBackdrop(!backdropColor)}>
                Warm-Up Toggle Background
            </button>

            <button onClick={() => toggleHeaderMode(!headerMode)}>
                Toggle Header Color
            </button>
        </div>
    );
}

export default Header;