import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/Book';
import { BookService } from 'src/app/Services/book.service';
import { SnackBarService } from 'src/app/Services/snack-bar.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']

})
export class ProductsComponent implements OnInit {

  ngOnInit(): void {
    this.getWishlist();
    this.getBooks();
  }

  constructor(private bookService: BookService, private snackBar: SnackBarService, private wishListService: WishlistService) {
  }

  public booklist: Book[] = [];
  public wishlist: Book[] = [];

  public getBooks() {
    this.bookService.getBooks().subscribe((bookList: Book[]) => {
      this.booklist = bookList.slice(0, 20);
    });
  }

  public getWishlist() {
    this.wishListService.getWishlist(15).subscribe((response: Book[]) => {
      this.wishlist = response;
    });
  }

  public isWishedBook(book: Book) {
    let wishedBook = this.wishlist.filter(item => item.bookId == book.bookId);
    if (wishedBook != null && wishedBook.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  onWishlistClicked(book: Book) {
    this.wishListService.addOrRemoveWishlist(15, book.bookId).subscribe(() => {
      if (this.isWishedBook(book)) {
        this.snackBar.openSnackBar('Item removed from your Wishlist', 'close');
        this.getWishlist();
      } else {
        this.snackBar.openSnackBar('Item added to your Wishlist', 'close');
        this.getWishlist();
      }
    }, error => {
      console.log('Error ocurred while adding to wishlist : ', error);
    });
  }
}
