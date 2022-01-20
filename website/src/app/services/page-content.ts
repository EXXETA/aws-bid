export interface PageContent {
    welcome: Welcome
    references: Reference[]
    profiles: Profile[]
}

export interface Welcome {
    title: string
    subTitle: string
    base64Img: string
    description: string
}

export interface Reference {
    title: string,
    subTitle: string,
    base64Img: string,
    stories: Story[]
}

export interface Story {
    title: string
    subTitle: string
    base64Img?: string
    categories: Category[]
}

export interface Category {
    title?: string,
    items: string[]
}

export interface Profile {
    id: number,
    name: string,
    field: string,
    title: string,
    tags: string[],
    description: string,
    biography: string,
    expertise: string,
    language: string,
    base64Img: string
}