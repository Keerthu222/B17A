import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/Book';
import { DataService } from 'src/app/Services/data.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private wishListService: WishlistService) {}

  ngOnInit(): void {
    this.fetchWishlistCount();  
  }

  public wishlistCount: number = 0;

  getWishlistCount() {
    return this.wishlistCount;
  }

  public fetchWishlistCount() {
    this.wishListService.getWishlist(15).subscribe((response: Book[]) => {
      this.wishlistCount = response.length;
    });
  }

}

