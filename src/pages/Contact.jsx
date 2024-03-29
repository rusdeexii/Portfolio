import { useEffect } from "react";

import { Col, Row, message, Tooltip, Typography } from "antd";
import {
    SmileOutlined,
    PhoneOutlined,
    MailOutlined,
    LinkedinOutlined,
    GithubOutlined,
    ArrowRightOutlined,
    CopyOutlined,
    LinkOutlined,
} from "@ant-design/icons";
import Fade from "react-reveal/Fade";

import { Card } from "../components";

function Contact() {
    const { Paragraph } = Typography;
    const [messageApi, contextHolder] = message.useMessage();
    const copied = () => {
        messageApi.open({
            type: "success",
            content: "Copied to clipboard",
        });
    };

    useEffect(() => {
        document.documentElement.scrollTop =
            document.documentElement.clientHeight;
        document.documentElement.scrollLeft =
            document.documentElement.clientWidth;
    }, []);

    return (
        <>
        <div className="container">
            {contextHolder}
            <div id="section-contact-me" className="section-space">
                <Fade bottom distance="10%">
                    <p className="mb-1">Contact Me</p>
                    <h2 className="font-xlarge text-uppercase">
                        📭 Get in <span className="color-primary">touch</span>
                    </h2>
                    <Paragraph>
                        <blockquote className="mt-2 mb-3">
                            I'm available for new opportunities. Please feel
                            free to contact me to discuss further{" "}
                            <SmileOutlined />
                        </blockquote>
                    </Paragraph>
                </Fade>
                <Fade bottom distance="10%">
                    <div className="d-flex flex-row flex-column-contact align-items-stretch gap-3">
                        <Card className="card-contact">
                            <div className="mb-2 font-title font-bold">
                                Hire me!
                            </div>
                            <div>
                                
                                <Tooltip title="Drop a message">
                                    <a
                                        href="mailto:patteera_m@outlook.com"
                                        className="list-info-link"
                                    >
                                        <MailOutlined />
                                        <span className="w-100">
                                            tayakornmuadrod@gmail.com
                                        </span>
                                        <ArrowRightOutlined />
                                    </a>
                                </Tooltip>
                            </div>
                        </Card>
                        <Card className="card-contact">
                            <div className="mb-2 font-title font-bold">
                                On the web
                            </div>
                            <div>
                                
                                <a
                                    href="https://github.com/rusdeexii"
                                    target="_blank"
                                    className="list-info-link" rel="noreferrer"
                                >
                                    <GithubOutlined />
                                    <span className="w-100">@rusdeexii</span>
                                    <LinkOutlined />
                                </a>
                            </div>
                        </Card>
                    </div>
                </Fade>
            </div>
            </div>
        </>
    );
}

export default Contact;
