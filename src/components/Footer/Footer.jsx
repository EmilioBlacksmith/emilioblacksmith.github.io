import './Footer.css'

export function Footer() {
    return (
        <>
            <div className="Footer">
                <div className='Menu'>
                    <a href=''>1. ABOUT ME</a>
                    <a href=''>2. PORTFOLIO</a>
                    <a href=''>3. OTHER</a>
                    <a href=''>4. BLOG</a>
                    <a href=''>5. MY SOCIALS</a>
                    <a href=''>6. MY YOUTUBE</a>
                </div>
                <div className='Copyright'>
                    Developed by <a href='https://github.com/EmilioBlacksmith' target='_blank' className='name'>EmilioBlacksmith</a>. MIT LICENSE 2023.
                </div>
            </div>
        </>
    );
}