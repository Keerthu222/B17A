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

  public getWishlist(userId: any) {
    return this.http.get<Book[]>(this.baseURL + `/api/Wishlist/${userId}`, {})
      .pipe(map((response: Book[]) => {
        return response;
      }));
  }

  public clearAllwishlist(userId: any) {
    return this.http.delete<any>(this.baseURL + `/api/Wishlist/${userId}`, {})
      .pipe(map((response: any) => {
        return response;
      }));
  }

  addOrRemoveWishlist(userId: any, bookId: any) {
    return this.http.post<Book>(this.baseURL + `/api/Wishlist/ToggleWishlist/${userId}/${bookId}`, {})
      .pipe(map((response: Book) => {
        return response;
      }));
  }

}
