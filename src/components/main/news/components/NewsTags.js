
function NewsTags({ newsTags, onClick }) {

    return (
        <div className="tags">
            <div>
                {
                    newsTags.map(({ tag, tagName, isOn }, idx) =>
                        <button key={idx}
                                className={isOn ? 'on' : ''}
                                onClick={() => onClick(tag)}>
                            {tagName}
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default NewsTags;