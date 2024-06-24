import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import project1Image from "../../assets/about/1.webp";
import project2Image from "../../assets/about/2.webp";
import project3Image from "../../assets/about/3.webp";
import project4Image from "../../assets/about/4.webp";

function ProjectSlider() {
    return (
        <Swiper
            className="h-full w-3/4 rounded-xl"
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            grabCursor={true}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
        >
            <SwiperSlide
                style={{ backgroundImage: `url(${project1Image})` }}
                className="bg-cover"
            >
                <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-black bg-opacity-60 p-10 text-center align-middle text-white opacity-0 transition-all ease-in-out hover:visible hover:opacity-100 hover:backdrop-blur-sm">
                    <h1 className="text-xl font-black">Movie Landing Page</h1>
                    <p className="text-sm text-gray">
                        This Movie Landing Page leverages the TMDB API and
                        display the a list of movies and tv shows. Users can
                        browse through the lists and sections, view detailed
                        information about each media and enjoy a smooth and
                        responsive user experience.
                    </p>
                    <p className="font-bold">click to learn more...</p>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{ backgroundImage: `url(${project2Image})` }}
                className="bg-cover"
            >
                <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-black bg-opacity-60 p-10 text-center align-middle text-white opacity-0 transition-all ease-in-out hover:visible hover:opacity-100 hover:backdrop-blur-sm">
                    <h1 className="text-xl font-black">The Busy Gamer App</h1>
                    <p className="text-sm text-gray">
                        he Busy Gamer Web App allows you to track videogames
                        that you want to play, and makes an approximation of how
                        long is going to take you to finish those games, based
                        on your schedule. Powered by How Long To Beat API.
                    </p>
                    <p className="font-bold">click to learn more...</p>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{ backgroundImage: `url(${project3Image})` }}
                className="bg-cover"
            >
                <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-black bg-opacity-60 p-10 text-center align-middle text-white opacity-0 transition-all ease-in-out hover:visible hover:opacity-100 hover:backdrop-blur-sm">
                    <h1 className="text-xl font-black">
                        Node Terminal Contact Card
                    </h1>
                    <p className="text-sm text-gray">
                        A terminal-based contact info / business card, that can
                        be called anywhere with NPM.
                    </p>
                    <p className="font-bold">click to learn more...</p>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{ backgroundImage: `url(${project4Image})` }}
                className="bg-cover"
            >
                <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-black bg-opacity-60 p-10 text-center align-middle text-white opacity-0 transition-all ease-in-out hover:visible hover:opacity-100 hover:backdrop-blur-sm">
                    <h1 className="text-xl font-black">BioLinks</h1>
                    <p className="text-sm text-gray">
                        A minimalistic responsive website to showcase main
                        social media links or project links, to share to others
                        online. It is based in Linktree and Linkin.bio.
                    </p>
                    <p className="font-bold">click to learn more...</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default ProjectSlider;
