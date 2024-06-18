import DateBar from "../components/About/dateBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import profileImage from "../assets/profile.jpg";

function About() {
    return (
        <div className="flex w-4/5 flex-col justify-between gap-8 p-10">
            <DateBar />
            <p className="text-xl">
                Emilio Herrera (Emilio Blacksmith) is a user-focused software
                engineer with a degree in Interactive Design (UX/UI). He has
                embarked on diverse projects, from video game development to
                full-stack web applications. Previously, he created full-stack
                projects for his YouTube channel and the Uncomfortably
                Comfortable community. Currently, he is the founder and a
                full-stack developer at Blacksmith Softworks.
            </p>
            <div className="flex h-96 gap-8">
                <div
                    style={{ backgroundImage: `url(${profileImage})` }}
                    className="h-full w-1/3 rounded-xl bg-cover shadow-3xl"
                />
                <Swiper
                    className="h-full w-2/3"
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
                    <SwiperSlide>1</SwiperSlide>
                    <SwiperSlide>2</SwiperSlide>
                    <SwiperSlide>3</SwiperSlide>
                </Swiper>
            </div>
            <div></div>
        </div>
    );
}

export default About;
