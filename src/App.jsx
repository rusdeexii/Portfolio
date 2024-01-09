import { useEffect } from "react";

import { ConfigProvider } from "antd";


import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import "./App.css";
import { scrollRestoration } from "./utils/script";

function App() {
    useEffect(() => {
        document.title = "Thayakorn'n Portfolio";
        scrollRestoration();
    }, []);
    return (
        <ConfigProvider
            
        >
            <Home />
            
                <AboutMe />
                <Skills />
                <Contact />
           
        </ConfigProvider>
    );
}

export default App;
