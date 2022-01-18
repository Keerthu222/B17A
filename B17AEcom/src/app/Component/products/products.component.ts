import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/Book';
import { DataService } from 'src/app/Services/data.service';
import { SnackBarService } from 'src/app/Services/snack-bar.service';

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

  constructor(private dataService: DataService, private snackBar: SnackBarService) {
  }

  public booklist: Book[] = [];
  public wishlist: Book[] = [];

  public getBooks() {
    this.dataService.fetchBooks().subscribe((bookList: Book[]) => {
      this.booklist = [];
      this.booklist = bookList.slice(0, 10);
    });
  }

  public getWishlist() {
    this.dataService.getWishlist(15).subscribe((Response: Book[]) => {
      this.wishlist = [];
      this.wishlist = Response;
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
    this.dataService.saveWishlist(15, book.bookId).subscribe(() => {
      if (this.isWishedBook(book)) {
        this.snackBar.openSnackBar('Item removed to your Wishlist', 'close');
        this.getWishlist();
      } else {
        this.snackBar.openSnackBar('Item added from your Wishlist', 'close');
        this.getWishlist();
      }
    }, error => {
      console.log('Error ocurred while adding to wishlist : ', error);
    });
  }
}
