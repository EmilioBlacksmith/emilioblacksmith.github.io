import './Footer.css'

export function Footer() {
    return (
        <>
            <div className="Footer">
                <div className='Menu'>
                    <a href='#Hero-Section'>1. ABOUT ME</a>
                    <a href='#Portfolio-Section'>2. PORTFOLIO</a>
                    <a href='#More-Section'>3. OTHER</a>
                    <a href='https://emilioblacksmith.github.io/Blog/' target='_blank'>4. BLOG</a>
                    <a href='https://emilioblacksmith.github.io/bioLink/' target='_blank'>5. MY SOCIALS</a>
                    <a href='https://www.youtube.com/channel/UC1ZeE2i5QwVwhWOV-HveneQ' target='_blank'>6. MY YOUTUBE</a>
                </div>
                <div className='Copyright'>
                    Developed by <a href='https://github.com/EmilioBlacksmith/emilioblacksmith.github.io' target='_blank' className='name'>EmilioBlacksmith</a>. MIT LICENSE 2023.
                </div>
            </div>
        </>
    );
}