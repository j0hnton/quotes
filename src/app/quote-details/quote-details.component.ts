import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();
  @Output() isUp= new EventEmitter<boolean>();
  @Output() isDOwn= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upQuote(plus:boolean){
    this.isUp.emit(plus);
  }
  downQuote(minus:boolean){
    this.isDOwn.emit(minus);
  }
  constructor() { }

  ngOnInit() {
  }

}
