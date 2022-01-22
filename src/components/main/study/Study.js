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
                studies.map(({ datetime, title, description, commentsCount }, index) => (
                    <Card datetime={datetime}
                          title={title}
                          description={description}
                          commentsCount={commentsCount} />
                ))
            }
        </div>
    );
}

export default Study;
