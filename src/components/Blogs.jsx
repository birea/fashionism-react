import React from "react";
import blogShowroom from "../assets/AlphaTauri_Showroom.jpg";
import blogShowroom2 from "../assets/AlphaTauri_Showroom_2.jpg";
import CardBlog from "./CardBlog";

const Blogs = () => {
    const showroom1 = {
        backgroundImage: `url(${blogShowroom})`,
    };

    const showroom2 = {
        backgroundImage: `url(${blogShowroom2})`,
    };

    return (
        <section className="bg-primary w-full text-white py-12">
            <div className="container mx-auto flex flex-col space-y-4">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-3xl font-bold">Blog</h2>
                    <a
                        href="/blogs"
                        className="text-lg font-medium underline hover:no-underline"
                    >
                        More Blogs
                    </a>
                </div>
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                    <CardBlog
                        link="/blogs/1"
                        title="SHOWROOM OPENING"
                        highlights="Showroom has opened in Bali, Indonesia"
                        image={showroom1}
                        classLink="row-span-3"
                        classText="py-36"
                    />
                    <CardBlog
                        link="/blogs/2"
                        title="SHOWROOM OPENING"
                        highlights="Showroom has opened in Bali, Indonesia"
                        image={showroom2}
                        classLink="row-span-2"
                        classText="py-8"
                    />
                    <CardBlog
                        link="/blogs/3"
                        title="SHOWROOM OPENING"
                        highlights="Showroom has opened in Bali, Indonesia"
                        image={showroom1}
                        classLink=""
                        classText="py-8"
                    />
                </div>
            </div>
        </section>
    );
};

export default Blogs;
