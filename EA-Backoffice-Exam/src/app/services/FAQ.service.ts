import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FAQ } from 'src/app/interfaces/FAQ.interface';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable({
    providedIn: 'root'
  })

  export class FAQService {
 
    faq!: FAQ;
    private faqSource = new BehaviorSubject(this.faq);  
     urlAPI = 'http://localhost:5432/api/FAQs/';
    currentUser = this.faqSource.asObservable();
    constructor(private http: HttpClient) { }
  
    getFAQs(): Observable<FAQ[]> {
      return this.http.get<FAQ[]>(this.urlAPI);
    }
  
    delete(id: string): Observable<FAQ> {
      return this.http.delete<FAQ>(this.urlAPI+ 'delete/' + id);
    }
    
    updateFAQ(user: FAQ, id: string): Observable<FAQ> {
      return this.http.put<FAQ>(this.urlAPI + 'update/' + id, user)
    }
  
  }