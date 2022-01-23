import "./Indicator.css"

function Indicator({ type='THREE_QUARTER_SPINNER' }) {
    const spinner = {
        'GRADIENT_SPINNER': (
            <div className="spinner-box">
                <div className="circle-border">
                    <div className="circle-core" />
                </div>
            </div>
        ),

        'SPINNER_ORBITS': (
            <div className="spinner-box flex">
                <div className="blue-orbit leo" />
                <div className="green-orbit leo" />
                <div className="red-orbit leo" />
                <div className="white-orbit w1 leo" />
                <div className="white-orbit w2 leo" />
                <div className="white-orbit w3 leo" />
            </div>
        ),

        'GRADIENT_CIRCLE_PLANES ': (
            <div className="spinner-box">
                <div className="leo-border-1">
                    <div className="leo-core-1" />
                </div>
                <div className="leo-border-2">
                    <div className="leo-core-2" />
                </div>
            </div>
        ),

        'SPINNING_SQUARES': (
            <div className="spinner-box">
                <div className="configure-border-1">
                    <div className="configure-core" />
                </div>
                <div className="configure-border-2">
                    <div className="configure-core" />
                </div>
            </div>
        ),

        'LOADING_DOTS': (
            <div className="spinner-box">
                <div className="pulse-container">
                    <div className="pulse-bubble pulse-bubble-1" />
                    <div className="pulse-bubble pulse-bubble-2" />
                    <div className="pulse-bubble pulse-bubble-3" />
                </div>
            </div>
        ),

        'SOLAR_SYSTEM': (
            <div className="spinner-box">
                <div className="solar-system">
                    <div className="earth-orbit orbit">
                        <div className="planet earth" />
                        <div className="venus-orbit orbit">
                            <div className="planet venus" />
                            <div className="mercury-orbit orbit">
                                <div className="planet mercury" />
                                <div className="sun" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),

        'THREE_QUARTER_SPINNER': (
            <div className="spinner-box">
                <div className="three-quarter-spinner" />
            </div>
        ),
    };

    return (
        <div className="indicator">
            {spinner[type]}
        </div>
    );
}

export default Indicator;
