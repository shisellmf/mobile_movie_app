export interface MovieMap {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    rating: number;
    poster: string;
    backdrop: string;
}

export interface CompleteMovie extends MovieMap {
    genres: { id: number; name: string }[];
    duration: number;
    budget: number;
    originalLanguage: string;
}

export interface MovieCast {
    id: number;
    name: string;
    profilePath: string;
    character?: string;
}
