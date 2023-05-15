export interface Project {
    name: string;
    description: string;
    url: string;
    image: string;
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
        url: 'projects/kotl',
        image: 'Images/kotl_banner.png',
        tags: [Tags.GameDevelopment, Tags.Unity]
    },
    {
        name: 'Voronoi Object Destruction',
        description: 'Implementation of two different algorithms in Unity for destroying objects in video games as the topic of my masters thesis.',
        url: 'projects/voronoi',
        image: 'Images/Voronoi/destruction.gif',
        tags: [Tags.GameDevelopment, Tags.Unity]
    },
    {
        name: 'Private Game Jam',
        description: 'A 2D Plattformer/Bullet Hell game as a result of a private game jam',
        url: 'projects/gamejam',
        image: 'Images/gamejam.gif',
        tags: [Tags.GameDevelopment, Tags.Unity]
    },
]