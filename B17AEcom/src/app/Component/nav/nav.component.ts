import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private data:DataService) {
   }
  //  public booklist:any=[]
   
  //  public getBooks() {
  //    this.data.getBooks().subscribe((Response:any=[])=> {
  //     this.booklist = Response;
  //     // .slice(0,4);
  //    });
  //  }
    ngOnInit(): void {

      // this.getBooks();
      }
}
