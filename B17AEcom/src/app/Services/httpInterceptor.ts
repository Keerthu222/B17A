import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJ1c2VyaWQiOiIxNSIsInVzZXJUeXBlSWQiOiIyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMiIsImp0aSI6IjIxZDdhMTU3LTMyMGUtNDY1Mi05NDlhLTQ5OTFiNTY2ODIwNCIsImV4cCI6MTY0MjU4MDg0OSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIn0.OL7mkp3jhUHhz0oKdu3ACOikwErqbRr7YB717ZHjiPM"
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: 'bearer ' + token,
          accept: 'text/plain',
          'Content-Type': 'application/json'
        }
      });
    }
    console.log('Intercepted HTTP call', req);
    return next.handle(req);
  }



}