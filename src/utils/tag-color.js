const tagColor = (children, color = "#EE7999") => {
    switch (children) {
        case "HTML":
            return "#EB3E00";
        case "CSS":
            return "#2465F1";
        case "JavaScript":
            return "#F0BE25";
        case "Pug.js":
            return "#836150";
        case "SCSS":
            return "#CF6B9D";
        case "Vue.js":
            return "#41B883";
        case "React.js":
            return "#00C6EF";
        case "jQuery":
            return "#106DAF";
        case "Bootstrap":
            return "#0F9D58";
            case "PHP":
            return "#612CAA";
        case "Tailwind CSS":
            return "#35BEF8";
        case "Quasar Framework":
            return "#207AD3";
        case "Posman":
            return "#EB3E00";   
        case "Ant Design":
            return "#0D6CFF";
        case "Figma":
            return "#A158FF";
        case "Adobe XD":
            return "#8B3070";
        case "Git":
            return "#F05639";
        case "Docker":
            return "#2465F1";
        default:
            return color;
    }
}

export default tagColor;