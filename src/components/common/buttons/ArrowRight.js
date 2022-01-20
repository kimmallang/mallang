import { BsChevronRight } from 'react-icons/bs';

function ArrowRight({ style, onClick }) {
    return (
        <div className="arrow arrow-right"
             style={{ ...style }}
             onClick={onClick}>
            <BsChevronRight />
        </div>
    );
}

export default ArrowRight;
