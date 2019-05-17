interface IOpenClipArt{
    title:string;
    payload: IPayLoad;
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