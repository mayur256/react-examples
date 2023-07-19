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
            colourHex: "#736f66",
            image: Mercury,
        },
        {
            name: "venus",
            colourText: "Pearly White",
            colourHex: "#c38736",
            image: Venus,
        },
        {
            name: "earth",
            colourText: "Blue",
            colourHex: "#495391",
            image: Earth,
        },
        {
            name: "mars",
            colourText: "Brown-Red",
            colourHex: "#623a32",
            image: Mars,
        },
        {
            name: "jupiter",
            colourText: "Brown, Orange, Red, White",
            colourHex: "#b8ba7f",
            image: Jupiter,
        },
        {
            name: "saturn",
            colourText: "hazy yellow-brown",
            colourHex: "#8f7962",
            image: Saturn,
        },
        {
            name: "uranus",
            colourText: "Blue-Green",
            colourHex: "#3db0c6",
            image: Uranus,
        },
        {
            name: "neptune",
            colourText: "bright azure blue",
            colourHex: "#4675fe",
            image: Neptune,
        },
    ];

    // main renderer
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Solar System</h1>
            {planets.map(({ name, image, colourHex }) => (
                <section key={name} className="planet" style={{ backgroundColor: colourHex }}>
                    <div className="image-container">
                        <img alt={name} src={image} className="hide-bg"  />
                    </div>
                </section>
            ))}
        </>
    );
};
