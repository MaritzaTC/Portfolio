import React from "react";
import { IconLinks } from "@/components/atoms/Icons";
import { SubTitle4 } from "@/components/atoms/Titles";
const Index = () => {
    const socialLinks = [
        { href: "https://facebook.com", icon: "tabler:brand-facebook-filled" },
        { href: "https://instagram.com", icon: "tabler:brand-instagram-filled" },
        { href: "https://linkedin.com", icon: "tabler:brand-linkedin-filled" },
        { href: "https://github.com", icon: "tabler:brand-github-filled" },
        { href: "https://wa.me/1234567890", icon: "tabler:brand-whatsapp-filled" },
        { href: "https://youtube.com", icon: "tabler:brand-youtube-filled" },
    ];
    return (
        <div className="bg-white w-[95px] h-[100vh] flex flex-col justify-start items-center fixed top-0 right-0 z-10 gap-[15px] mt-[73px]">
            <SubTitle4 text="Links" />
            <nav className="flex flex-col w-[48px] h-[363px] gap-[15px]">
                {socialLinks.map(({ href, icon }) => (
                    <a key={icon} href={href} target="_blank" rel="noopener noreferrer">
                        <IconLinks icon={icon} />
                    </a>
                ))}
            </nav>
        </div>
    );
};
export default Index;
