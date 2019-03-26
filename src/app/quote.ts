export class Quote {
    public showAuthor:boolean
    constructor(public author:string,
      public quote:string,
      public publisher:string,
      public completeDate:Date,
      public likeVote:number,
       public dislikeVote:number)
       {
        this.showAuthor=false

    }
}
