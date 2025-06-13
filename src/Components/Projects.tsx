import { Route, Routes, useLocation } from 'react-router-dom'
import { ProjectNavigation } from './ProjectNavigation'
import { projects } from '../Data/Projects'

export const Projects = () => {
    const location = useLocation();
    console.log(location)

    return (
        <>
            <Routes>
                {projects.map((project) => {
                    return (
                        <Route path={project.url} element={project.element} />
                    )
                })
                }
            </Routes>
            <ProjectNavigation projects={projects}/>
        </>
    )
}
