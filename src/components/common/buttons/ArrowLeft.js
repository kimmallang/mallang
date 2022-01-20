import { BsChevronLeft } from 'react-icons/bs';

function ArrowLeft({ style, onClick }) {
    return (
        <div className="arrow arrow-left"
             style={{ ...style }}
             onClick={onClick}>
            <BsChevronLeft />
        </div>
    );
}

export default ArrowLeft;
