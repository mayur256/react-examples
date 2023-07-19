// Static images
import Mercury from "./assets/images/mercury.jpg";
import Venus from "./assets/images/venus.jpg";
import Earth from "./assets/images/earth.jpg";
import Mars from "./assets/images/mars.png";
import Jupiter from "./assets/images/jupiter.webp";
import Saturn from "./assets/images/saturn.png";
import Uranus from "./assets/images/uranus.jpg";
import Neptune from "./assets/images/neptune.jpg";

// CSS
import "./App.css";

// Component definition
export default function App() {
    const planets = [
        {
            name: "mercury",
            colourText: "Dark Gray",
            colourHex: "",
            image: Mercury,
        },
        {
            name: "venus",
            colourText: "Pearly White",
            colourHex: "",
            image: Venus,
        },
        { name: "earth", colourText: "Blue", colourHex: "", image: Earth },
        {
            name: "mars",
            colourText: "Brown-Red",
            colourHex: "",
            image: Mars,
        },
        {
            name: "jupiter",
            colourText: "Brown, Orange, Red, White",
            colourHex: "",
            image: Jupiter,
        },
        {
            name: "saturn",
            colourText: "hazy yellow-brown",
            colourHex: "",
            image: Saturn,
        },
        {
            name: "uranus",
            colourText: "Blue-Green",
            colourHex: "",
            image: Uranus,
        },
        {
            name: "neptune",
            colourText: "bright azure blue",
            colourHex: "",
            image: Neptune,
        },
    ];

    // main renderer
    return (
        <>
            <h1>Solar System</h1>
            {planets.map(({ name, image }) => (
                <section key={name} className="planet">
                    <div className="image-container">
                    </div>
                </section>
            ))}
        </>
    );
};
