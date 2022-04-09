import { BsChevronUp } from 'react-icons/bs';
import { useEffect, useState } from "react";
import { throttle } from "lodash";

function TopButton() {
    const [isDisplay, setIsDisplay] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = throttle((e) => {
        setIsDisplay(window.scrollY > 200);
    }, 100);

    const className = isDisplay ? 'top-button show' : 'top-button';
    return (
        <div className={className} onClick={() => window.scrollTo(0, 0)}>
            <BsChevronUp />
        </div>
    );
}

export default TopButton;
