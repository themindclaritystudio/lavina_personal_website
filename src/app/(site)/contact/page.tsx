import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
<<<<<<< HEAD
    title: "Contact | Venus",
=======
    title: "Contact | Lavina Pratap Bhambhani",
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
     
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
