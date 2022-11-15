import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { FAQ } from 'src/app/interfaces/FAQ.interface';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
  @Input() faq!: FAQ
  @Output() deleteFAQ = new EventEmitter<FAQ>();
  @Output() updateFAQ = new EventEmitter<FAQ>();
  constructor() { }

  ngOnInit(): void {
  }
  delete():void{
    this.deleteFAQ.emit(this.faq)
    location.reload();
  }
  update(newQuestion: string, newAnsewr: string){
    this.faq.Question = newQuestion;
    this.faq.Ansewr = newAnsewr;
    this.updateFAQ.emit(this.faq);
    location.reload();
  }
}
