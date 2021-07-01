export interface Movies {
  id?:number,
  mName?: string,
  actor?: Actor,
  director?: Director,
  language?: string,
  year?: number
}

export interface Actor{
  aid?: number,
  aName?:string,
  hits?:number,
  flops?:number,
  industry?:string
}

export interface Director{
  did?: number,
  dName?:string,
  hits?:number,
  flops?:number,
  industry?:string
}
