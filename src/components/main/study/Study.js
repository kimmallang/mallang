import { useEffect, useState } from "react";
import Card from "../../common/card/Card";
import StudyApi from "./StudyApi";
import LoadingPage from "../../common/pages/LoadingPage";

function Study() {
    const [studies, setStudies] = useState([]);

    useEffect(() => {
        StudyApi.getStudies()
            .then((studies) => setStudies(studies))
            .catch(e => console.log(e));
    });

    return (
        <div className="study">
            { studies.length === 0 ? <LoadingPage /> : null}
            {
                studies.map((study, index) => (
                    <Card key={index} {...study} />
                ))
            }
        </div>
    );
}

export default Study;
