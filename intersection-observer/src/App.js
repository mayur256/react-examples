import { useEffect } from "react";

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
    // list of planets
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

    // intersection observer callback
    const obsCallback = (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const planet = entry.target.dataset.planetName;
                console.log(`Intersected planet : ${planet}`);
                handlePlanetIntersection(planet)
            }
        }
    }

    // configuration object for observer
    const opt = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    };

    // onComponentDidMount
    useEffect(() => {
        const observer = new IntersectionObserver(obsCallback, opt);
        const targetElms = document.querySelectorAll('.planet');
        
        // observe elements
        for (const el of targetElms) {
            observer.observe(el);
        }

        return () => {
            for (const el of targetElms) {
                observer.unobserve(el);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlePlanetIntersection = (planet) => {
        const planetColor = planets.find(({ name }) => name === planet)?.colourHex ?? '#fff';
        window.alert(`Welcome to ${planet}`);
        document.body.style.backgroundColor = planetColor;
    }

    // main renderer
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Solar System</h1>
            {planets.map(({ name, image }) => (
                <section key={name} className="planet" data-planet-name={name}>
                    <div className="image-container">
                        <img alt={name} src={image} className="hide-bg"  />
                    </div>
                </section>
            ))}
        </>
    );
};
