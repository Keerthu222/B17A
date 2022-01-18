export class Book {
  public bookId: number
  public title: string;
  private author: string;
  private category: string;
  public price: number;
  public coverFileName: string;

  constructor(
    bookId: number,
    title: string,
    author: string,
    category: string,
    price: number,
    coverFileName: string

  ) {
    this.bookId = bookId;
    this.title = title;
    this.author = author;
    this.category = category;
    this.price = price;
    this.coverFileName = coverFileName;
  }

  public getCoverFileName() {
    return this.coverFileName;
  }
  public getBookId() {
    return this.bookId;
  }
}





