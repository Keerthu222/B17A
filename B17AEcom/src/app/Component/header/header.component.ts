import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/Book';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchWishlistCount();
    
  }

  public wishlistCount: number = 0;

  getWishlistCount() {
    return this.wishlistCount;
  }

  public fetchWishlistCount() {
    this.dataService.getWishlist(15).subscribe((Response: Book[]) => {
      this.wishlistCount = Response.length;
    });
  }

}

