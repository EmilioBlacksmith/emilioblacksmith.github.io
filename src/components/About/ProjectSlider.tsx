import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { useProjectData } from "../../hooks/useProjectData";
import { Link } from "react-router-dom";

function ProjectSlider() {
    const data = useProjectData();
    const filteredData = data.filter((project) => project.sliderImg);

    return (
        <Swiper
            className="h-full w-full rounded-xl lg:w-3/4"
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            grabCursor={true}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
        >
            {filteredData &&
                filteredData.map((project) => (
                    <SwiperSlide
                        style={{ backgroundImage: `url(${project.sliderImg})` }}
                        className="bg-cover"
                        key={project.id}
                    >
                        <Link
                            to={`/projects/${project.id}`}
                            className="flex h-full w-full flex-col items-center justify-center gap-2 bg-black bg-opacity-80 p-10 text-center align-middle text-white opacity-100 transition-all ease-in-out hover:backdrop-blur-sm lg:gap-6 lg:opacity-0 lg:hover:opacity-100"
                        >
                            <h1 className="font-black lg:text-xl">
                                {project.title}
                            </h1>
                            <p className="text-gray lg:text-sm">
                                {project.description}
                            </p>
                            <p className="font-bold">click to learn more...</p>
                        </Link>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}

export default ProjectSlider;
