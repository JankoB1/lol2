export interface ButtonDT {
    text: string,
    url: string,
    isActive: boolean,
    isLink: boolean,
}

export interface DropCardDT {
    imageUrl: string,
    time: string,
    thumbUrl: string,
    name: string,
    nickname: string,
    ethPrice: string,
    category: string
}

export interface VoteCardDT {
    thumbUrl: string,
    name: string,
    desc: string,
    button: ButtonDT
}

export interface JokeRankingCardDT {
    thumbUrl: string,
    name: string,
    numOfVotes: number,
    num: string,
    active: boolean
}

export interface RoadmapCardDT {
    title: string,
    imageUrl: string,
    desc: string
}