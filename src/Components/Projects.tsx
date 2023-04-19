import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Kotl } from '../Pages/Projects/Kotl'
import { ProjectNavigation } from './ProjectNavigation'
import { projects } from '../Data/Projects'

export const Projects = () => {
    const location = useLocation();
    console.log(location)

    const [currentProject, setCurrentProject] = React.useState(0);

    return (
        <>
            <Routes>
                {projects.map((project, index) => {
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
