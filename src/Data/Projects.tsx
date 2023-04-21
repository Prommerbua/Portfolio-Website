import kotl from '../Assets/Images/kotl_banner.png'
import destruction from '../Assets/Images/Voronoi/destruction.gif'
import gamejam from '../Assets/Images/gamejam.gif'
import { Kotl } from '../Pages/Projects/Kotl'
import { Voronoi } from '../Pages/Projects/Voronoi';
import { Gamejam } from '../Pages/Projects/Gamejam';


export interface Project {
    name: string;
    description: string;
    url: string;
    image: string;
    element: JSX.Element;
    tags?: Tags[];
}

export enum Tags {
    GameDevelopment = 'Game Development',
    Unity = 'Unity',
}


export const projects: Project[] = [
    {
        name: 'Keeper of the Library',
        description: 'Keeper of the Library is a 3D Adventure/Puzzle Game, where you play as a flying book with magical abilities. Use these to save your wizard from dark forces.',
        url: 'kotl',
        image: kotl,
        element: <Kotl/>,
        tags: [Tags.GameDevelopment, Tags.Unity]
    },
    {
        name: 'Voronoi Object Destruction',
        description: 'Implementation of two different algorithms in Unity for destroying objects in video games as the topic of my masters thesis.',
        url: 'voronoi',
        image: destruction,
        element: <Voronoi />,
        tags: [Tags.GameDevelopment, Tags.Unity]
    },
    {
        name: 'Private Game Jam',
        description: 'A 2D Plattformer/Bullet Hell game as a result of a private game jam',
        url: 'gamejam',
        image: gamejam,
        element: <Gamejam />,
        tags: [Tags.GameDevelopment, Tags.Unity]
    },
]