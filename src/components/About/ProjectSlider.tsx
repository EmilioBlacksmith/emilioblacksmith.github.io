import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { useProjectData } from "../../hooks/useProjectData";

function ProjectSlider() {
    const data = useProjectData();
    const filteredData = data.filter((project) => project.sliderImg);

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
            {filteredData &&
                filteredData.map((project) => (
                    <SwiperSlide
                        style={{ backgroundImage: `url(${project.sliderImg})` }}
                        className="bg-cover"
                        key={project.id}
                    >
                        <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-black bg-opacity-60 p-10 text-center align-middle text-white opacity-0 transition-all ease-in-out hover:visible hover:opacity-100 hover:backdrop-blur-sm">
                            <h1 className="text-xl font-black">
                                {project.title}
                            </h1>
                            <p className="text-sm text-gray">
                                {project.description}
                            </p>
                            <p className="font-bold">click to learn more...</p>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}

export default ProjectSlider;
