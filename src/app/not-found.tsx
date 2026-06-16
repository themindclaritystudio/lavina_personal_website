import HeroSub from "@/components/SharedComponent/HeroSub";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "404 Page | Venus ",
=======
  title: "404 Page | Lavina Pratap Bhambhani ",
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
};

const ErrorPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "404" },
  ];
  return (
    <>
    
      <NotFound />
    </>
  );
};

export default ErrorPage;
