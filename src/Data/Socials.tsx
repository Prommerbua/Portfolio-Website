import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiTwitchFill } from "react-icons/ri";

export interface Social {
    name: string;
    icon: JSX.Element;
    url: string;
}

export const socials: Social[] = [
    {
        name: 'Github',
        icon: <AiFillGithub />,
        url: 'https://github.com/Prommerbua',
    },
    {
        name: 'LinkedIn',
        icon: <AiFillLinkedin />,
        url: 'https://www.linkedin.com/in/prommerbua/',
    },
    {
        name: 'Facebook',
        icon: <AiFillFacebook />,
        url: 'https://www.facebook.com/michi.prommer',
    },
    {
        name: 'Instagram',
        icon: <AiFillInstagram />,
        url: 'https://www.instagram.com/prommerbua/',
    },
    {
        name: 'Twitch',
        icon: <RiTwitchFill />,
        url: 'https://www.twitch.tv/prommerbua1',
    },
];
