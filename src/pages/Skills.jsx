import { Space } from "antd";
import { CodeOutlined, FormatPainterOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";

import { Card, Tag } from "../components";

function Skills() {
    return (
        <div className="container">
        <div id="section-skills" className="section-space">
            <Fade bottom distance="10%">
                <h2 className="mb-3 font-xlarge text-uppercase">
                    💻 My <span className="color-primary">Skills</span>
                </h2>
            </Fade>
            <Fade bottom distance="10%">
                <div>
                    <Card>
                        <div className="mb-4">
                            <div className="mb-3">
                                <CodeOutlined className="font-title" />
                                <span className="ml-1 font-title font-bold">
                                    Technical Skills
                                </span>
                            </div>
                            <div className="mb-3">
                                <div className="mb-2">Web Development</div>
                                <Space size={[0, 8]} wrap>
                                    <Tag>HTML</Tag>
                                    <Tag>CSS</Tag>
                                    <Tag>JavaScript</Tag>
                                    <Tag>PHP</Tag>
                                </Space>
                            </div>
                            <div className="mb-3">
                                <div className="mb-2">
                                    Frameworks &amp; Libraries
                                </div>
                                <Space size={[0, 8]} wrap>
                                    
                                    <Tag>React.js</Tag>
                                    <Tag>Ant Design</Tag>
                                    <Tag>Bootstrap</Tag>
                                    <Tag>WordPress</Tag>
                                    <Tag>Tailwind CSS</Tag>
                                   
                                </Space>
                            </div>
                            <div>
                                <div className="mb-2">Version Control</div>
                                <Space size={[0, 8]} wrap>
                                    <Tag>Git</Tag>
                                    <Tag>Bitbucket</Tag>
                                </Space>
                            </div>
                        </div>
                        <div>
                           
                            <div>
                                <div className="mb-2">Tools</div>
                                <Space size={[0, 8]} wrap>
                                    <Tag>Posman</Tag>
                                    <Tag>Docker</Tag>
                                   
                                </Space>
                            </div>
                        </div>
                    </Card>
                </div>
            </Fade>
        </div>
        </div>
    );
}

export default Skills;
