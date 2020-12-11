export interface character {
    id:number,
    gender:string,
    image: string,
    name:string,
    species:string,
    episode: [];
    status:string,
    type: string,
    url:string,
    location: location,

}

export interface location{
     name:string,
     url:string,   
}

export interface origin{
    name:string,
    url:string,
}

export interface results{
    info: info,
    results: []
}

export interface info{
    count: number,
    next: string,
    pages: number,
    prev: number,
}

export interface episode{
    air_date:string,
    created:string,
    episode:string,
    name:string,
    url:string,
    characters:character[]
}
