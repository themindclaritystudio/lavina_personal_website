import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
<<<<<<< HEAD
    title: "Portfolio | Venus",
=======
    title: "Portfolio | Lavina Pratap Bhambhani",
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
};

const PortfolioList = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/portfolio", text: "Portfolio" },
    ];
    return (
        <>
           
            <Portfolio />
        </>
    );
};

export default PortfolioList;