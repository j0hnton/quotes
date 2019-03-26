import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
     new Quote('John','Where there is a will there is a way','Avicii',new Date(2019,3,26),0,0 ),
     new Quote('Alex','Make your tomorrow better','Anonymous',new Date(2019,3,26),0,0 ),
     new Quote('John','A rastaman is a peaceful man','Joseph Hill',new Date(2019,3,26),0,0 )


    ]
    toogleDetails(index){
       this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    }
   addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)
}

    deleteQuote(isComplete, index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].author}`)

            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }

upVote(isUp,index){
  if(isUp){
    this.quotes[index].likeVote+=1;
  }
}
downVote(isDown,index){
  if(isDown){
    this.quotes[index].dislikeVote+=1;
  }
}
    ngOnInit(){

    }
    constructor(){}
}
