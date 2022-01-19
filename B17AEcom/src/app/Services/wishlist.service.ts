import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Book } from '../Models/Book';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public baseURL = "https://bookcart.azurewebsites.net"

  constructor(private http: HttpClient) { }

  public getWishlist(userId: number) {
    return this.http.get<Book[]>(this.baseURL + `/api/Wishlist/${userId}`)
      .pipe(map((response: Book[]) => {
        return response;
      }));
  }

  public clearAllwishlist(userId: number) {
    return this.http.delete<number>(this.baseURL + `/api/Wishlist/${userId}`)
      .pipe(map((response: number) => {
        return response;
      }));
  }

  addOrRemoveWishlist(userId: number, bookId: number) {
    return this.http.post<Book[]>(this.baseURL + `/api/Wishlist/ToggleWishlist/${userId}/${bookId}`, null)
      .pipe(map((response: Book[]) => {
        return response;
      }));
  }
}
