import './Header.css'

export function Header() {
    return (
        <>
            <div className="Header">
                <a className="Logo" href='/'></a>
                <input 
                    className='darkModeToggle'
                    type='checkbox'
                    id='darkmode-toggle'
                ></input>
            </div>
        </>
    );
}