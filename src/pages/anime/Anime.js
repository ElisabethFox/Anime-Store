import { useParams } from 'react-router-dom';
import { projects } from './../helpers/projectsList'

const AnimeCatalogue = () => {
    const { id } = useParams();
    const project = projects.find(({ projectId }) => String(projectId) === id);
    const { title, skills, imgBig } = project;

    return (
    <main className="section">
        <div className="container">

            <div className="project-details">

                <h1 className="title-1">{title}</h1>
                <img src={imgBig} alt="{title}" className="project-details__cover" />

                <div className="project-details__desc">
                    <p>{skills}</p>

                </div>

            </div>
        </div>
    </main>
    );
}
 
export default AnimeCatalogue;