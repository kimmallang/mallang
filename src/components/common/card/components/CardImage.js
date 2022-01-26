function CardImage({ src, alt }) {
    return src ? (
        <div className="image">
            <img src={src} alt={alt} />
        </div>
    ) : null;
}

export default CardImage;
