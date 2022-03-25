import { BsPencilFill } from 'react-icons/bs';

function WriteButton({ onClick }) {
    return (
        <div className="write-button" onClick={onClick}>
            <BsPencilFill />
        </div>
    );
}

export default WriteButton;
