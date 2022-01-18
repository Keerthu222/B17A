import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/Book';
import { DataService } from 'src/app/Services/data.service';
import { SnackBarService } from 'src/app/Services/snack-bar.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public wishListItem: Book[] = [];

  constructor(private wishlistService: WishlistService, private snackBar: SnackBarService, private data: DataService) { }

  ngOnInit(): void {
    this.getWishlist();
  }

  public getWishlist() {
    this.wishlistService.getWishlist(15).subscribe((Response: Book[]) => {
      this.wishListItem = [];
      this.wishListItem = Response;
    });
  }

  clearWishList() {
    this.wishlistService.clearAllwishlist(15).subscribe((Response: any) => {
      this.snackBar.openSnackBar('Wishlist Cleared', 'close');
      this.getWishlist();
    }, error => {
      this.snackBar.openSnackBar('Error ocurred while clearing wishlist', 'close');
    });
  }

  removeFromWishlist(book: Book) {
    this.wishlistService.removeWishlist(15, book.bookId).subscribe(() => {
      this.snackBar.openSnackBar('Item removed from your Wishlist', 'close');
      this.getWishlist();
    }, error => {
      console.log('Error ocurred while removing from wishlist : ', error);
    });

  }
}
