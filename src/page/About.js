import { useSearchParams } from "react-router-dom";

const About = () => {
    const [searchParams] = useSearchParams();
    const detail = searchParams.get("detail");
    const mode = searchParams.get("mode");

    return (
        <div>
            <h2>About</h2>
            <p>query string detail: {detail}</p>
            <p> mode : {mode}</p>
        </div>
    );
};

export default About;
