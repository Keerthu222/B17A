import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Book } from '../Models/Book';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http: HttpClient) { }

  public baseURL = "https://bookcart.azurewebsites.net"

  public getBooks() {
    return this.http.get(this.baseURL + '/api/Book');
  }
  public fetchBooks() {
    return this.http.get<Book[]>(this.baseURL + `/api/Book`, {})
      .pipe(map((response: Book[]) => {
        return response;
      }));
  }

  public getWishlist(userId: any) {
    return this.http.get<Book[]>(this.baseURL + `/api/Wishlist/${userId}`, {})
      .pipe(map((response: Book[]) => {
        return response;
      }));
  }

  saveWishlist(userId: any, bookId: any) {
    return this.http.post<Book>(this.baseURL + `/api/Wishlist/ToggleWishlist/${userId}/${bookId}`, {})
      .pipe(map((response: Book) => {
        return response;
      }));
  }

}
