import { Injectable } from '@angular/core';
import { category} from '../mockResponses/category';
import { products} from '../mockResponses/products';
import { users} from '../mockResponses/users';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable() export class HttpConfigInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    //  console.log('event--->>>', event);
                }

                if (request.url.endsWith('/api/category/')) {
                    console.log(category);
                    return (new HttpResponse({
                        status: 200, body: category 
                            }
                    ));
                        }
                else if (request.url.endsWith('/api/product/')) {
                    console.log(products)
                        return (new HttpResponse({
                            status: 200, body: products 
                                }
                ));    

                }
                else if (request.url.includes('/api/user/')) {
                    console.log(users)
                    let userId= request.url.split('/')[5];
                    console.log(userId);
                        return (new HttpResponse({
                            status: 200, body: users[userId] 
                                }
                ));    

                }


                return event;
            }));
    }
}