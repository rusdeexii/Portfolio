
import {
    HomeOutlined,
    UserOutlined,
    LaptopOutlined,
    MessageOutlined,
} from "@ant-design/icons";
import React from "react";

export const ANCHOR_ITEMS = [
    {
        title: (
            <React.Fragment>
                <HomeOutlined className="mr-2" />
                Home
            </React.Fragment>
        ),
        key: "section-home",
        href: "#section-home",
    },
    {
        title: (
            <React.Fragment>
                <UserOutlined className="mr-2" />
                About Me
            </React.Fragment>
        ),
        key: "section-about-me",
        href: "#section-about-me",
    },
  ,
    {
        title: (
            <React.Fragment>
                <LaptopOutlined className="mr-2" />
                Skills
            </React.Fragment>
        ),
        key: "section-skills",
        href: "#section-skills",
    },
    {
        title: (
            <React.Fragment>
                <MessageOutlined className="mr-2" />
                Contact Me
            </React.Fragment>
        ),
        key: "section-contact-me",
        href: "#section-contact-me",
    },
];