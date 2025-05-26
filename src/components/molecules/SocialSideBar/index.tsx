import React from "react";
import { IconLinks } from "@/components/atoms/Icons";
import { SubTitle4 } from "@/components/atoms/Titles";
/**
 * Renders a fixed vertical sidebar containing social media links with their respective icons.
 *
 * The sidebar is positioned on the right side of the viewport and displays a list of social media
 * platforms as clickable icons, each opening the corresponding link in a new tab. The sidebar also
 * includes a subtitle labeled "Links".
 *
 * @component
 * @returns {JSX.Element} The rendered sidebar with social media links.
 */
const Index = () => {
    const socialLinks = [
        { href: "https://www.facebook.com/share/1FVxt8FY5J/", icon: "tabler:brand-facebook-filled" },
        { href: "https://www.instagram.com/maritza9905?igsh=b3JkejJxb3I5bmlv", icon: "tabler:brand-instagram-filled" },
        { href: "https://www.linkedin.com/in/maritza-tabarez-c%C3%A1rdenas-51868b355/", icon: "tabler:brand-linkedin-filled" },
        { href: "https://github.com/MaritzaTC", icon: "tabler:brand-github-filled" },
        { href: "https://wa.me/3216679196", icon: "tabler:brand-whatsapp-filled" },
        { href: "https://www.youtube.com/@maritzatabarezcardenas4842/featured", icon: "tabler:brand-youtube-filled" },
    ];
    return (
        <div className="bg-white w-[95px] h-full max-h-[100vh] flex flex-col justify-start items-center fixed top-0 right-0 z-10 gap-[15px] pt-[73px] ">
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
