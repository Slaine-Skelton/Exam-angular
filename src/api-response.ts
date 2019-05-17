interface IOpenClipArt{
    title:string;
    payload: IPayLoad;
    myName: string;
}

interface IPayLoad{
    description:string;
    tags: string;
    created:string;
    svg:ISvg;
}

interface ISvg{
    url:string;
}