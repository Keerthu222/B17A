import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Book } from '../Models/Book';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  public baseURL = "https://bookcart.azurewebsites.net"

  public getBooks() {
    return this.http.get<Book[]>(this.baseURL + `/api/Book`)
      .pipe(map((response: Book[]) => {
        return response;
      }));
  }
}
