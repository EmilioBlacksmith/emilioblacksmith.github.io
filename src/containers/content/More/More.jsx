import './More.css'

export function More(){
    return(
        <section className="hidden" id="More-Section">
            <div className='more_data'>
                <div className='SectionName'>
                    <h1>/* I DO OTHER THINGS 💀*/</h1>
                </div>
                <div className='More'>
                    <div className='Youtube-Section'>
                        <h1>I Do Youtube 🎥</h1>
                        <p>I do youtube videos since 2020 about development, trying to make it as entertaining as possible. (most of the time)</p>
                        <div className='video_group'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Qnbxfw_oAZo?si=UsWvLQGbQv3Up-xs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='video' allowFullScreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/h3VG6NCL3h8?si=mQn-IPfeo4wn97WH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='video' allowFullScreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ti1_qnA5-LY?si=3YG0u0-V9GmO-3NB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='video' allowFullScreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/QO2iFnoGquk?si=bcDGSG2e1ofT-6PN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='video' allowFullScreen></iframe>
                        </div>
                        <a href="https://www.youtube.com/channel/UC1ZeE2i5QwVwhWOV-HveneQ" target='_blank'>Learn More...</a>
                    </div>
                    <div className='Blog-Section'>
                        <div className='blog-post'>
                            <h3>I wrote about:</h3>
                            <h1>Insecurities</h1>
                            <p>Life is interesting sometimes, it bless you with people, it bless you with time, it bless you with commodity, it bless you with many things to be grateful for. I'm grateful...</p>
                            <a href="https://emilioblacksmith.github.io/Blog/posts/goodbye_unity/" target='_blank'>Read More...</a>
                        </div>
                        <div className='blog-post'>
                            <h3>I wrote about:</h3>
                            <h1>The Trick Behind Productivity</h1>
                            <p>You have probably felt the same, you're exploring different youtube videos about the topic of self improvement, productivity and how to use your time efficiently to make more things...</p>
                            <a href="https://emilioblacksmith.github.io/Blog/posts/the-trick-behind-productivity/" target='_blank'>Read More...</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}