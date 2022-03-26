import StringUtil from "../../../../utils/StringUtil";

function CardDescription({ description }) {
    return description ? <div className="description">{StringUtil.applyNewLine(description)}</div> : null;
}

export default CardDescription;
