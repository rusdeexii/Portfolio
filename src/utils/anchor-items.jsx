import {
    HomeOutlined,
    UserOutlined,
    LaptopOutlined,
    MessageOutlined,
} from "@ant-design/icons";

export const ANCHOR_ITEMS = [
    {
        title: (
            <>
                <HomeOutlined className="mr-2" />
                Home
            </>
        ),
        key: "section-home",
        href: "#section-home",
    },
    {
        title: (
            <>
                <UserOutlined className="mr-2" />
                About Me
            </>
        ),
        key: "section-about-me",
        href: "#section-about-me",
    },
  ,
    {
        title: (
            <>
                <LaptopOutlined className="mr-2" />
                Skills
            </>
        ),
        key: "section-skills",
        href: "#section-skills",
    },
    {
        title: (
            <>
                <MessageOutlined className="mr-2" />
                Contact Me
            </>
        ),
        key: "section-contact-me",
        href: "#section-contact-me",
    },
];
