export class urls{

  url: string;
  name:string;
  description:string;
  time:string;

  constructor(name:string,url:string,desrcirption:string,time:string)
  {
  this.name=name;
  this.url=url;
  this.description=desrcirption;
  this.time=time;
  }
}
