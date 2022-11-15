import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {tap } from 'rxjs';
import { FAQ } from 'src/app/interfaces/FAQ.interface';
import { FAQService } from '../../services/FAQ.service';
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent implements OnInit {
  FAQs!: FAQ[];
  constructor(private faqSrv: FAQService,public dialog: MatDialog) { }


  ngOnInit(): void {
    this.faqSrv.getFAQs()
    .pipe(
      tap((FAQs: FAQ[]) => this.FAQs = FAQs)
    )
    .subscribe();

    
  }
  deleteFAQ(faq: FAQ): void {
    this.faqSrv.delete(faq._id!).subscribe(
      data =>  { if(data._id == faq._id){
        this.FAQs = this.FAQs.filter(Faq => Faq._id != data._id)
      }}
    );
  }

  updateOneFAQ(faq: FAQ): void {
    const editedFAQ: FAQ = {
      _id: faq._id,
      Question: faq.Question,
      Ansewr: faq.Ansewr,
      points: faq.points,
      date: faq.date,
      user: faq.user
    } 
    this.faqSrv.updateFAQ(editedFAQ, faq._id!).subscribe({
      next: data => {
        console.log(data);
      }, 
      error: error => {
      console.log(error);
      }
    })
  }
      
      
  }



