import { useEffect, useState } from "react";
import Card from "../../common/card/Card";
import StudyApi from "./StudyApi";

function Study() {
    const [studies, setStudies] = useState([]);

    useEffect(() => {
        StudyApi.getStudies()
            .then((studies) => setStudies(studies))
            .catch(e => console.log(e));
    });

    return (
        <div className="study">
            {
                studies.map((study, index) => (
                    <Card key={index} {...study} />
                ))
            }
        </div>
    );
}

export default Study;
