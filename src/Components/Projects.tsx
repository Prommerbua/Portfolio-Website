import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Kotl } from '../Pages/Projects/Kotl'
import { ProjectOverview } from '../Pages/ProjectOverview'
import { ProjectNavigation } from './ProjectNavigation'

export const Projects = () => {
    const location = useLocation();
    console.log(location)

    return (
        <>
            <Routes>
                <Route path="kotl" element={<Kotl />} />
                <Route path="voronoi" element={<Kotl />} />
            </Routes>
            <ProjectNavigation />
        </>
    )
}
