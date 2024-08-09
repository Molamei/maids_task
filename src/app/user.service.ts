import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';
  private usersCache: { [page: number]: any } = {};  // Cache for paginated users
  private userCache: { [id: number]: any } = {};  // Cache for individual users

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    if (this.usersCache[page]) {
      // Return cached data if available
      return of(this.usersCache[page]);
    } else {
      // Fetch data from API and cache it
      return this.http.get<any>(`${this.apiUrl}?page=${page}`).pipe(
        map(data => {
          this.usersCache[page] = data;  // Cache the response
          return data;
        }),
        catchError(error => {
          console.error('Error fetching users data', error);
          return of(null);
        })
      );
    }
  }

  getUser(id: number): Observable<any> {
    if (this.userCache[id]) {
      // Return cached data if available
      return of(this.userCache[id]);
    } else {
      // Fetch data from API and cache it
      return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
        map(data => {
          this.userCache[id] = data;  // Cache the response
          return data;
        }),
        catchError(error => {
          console.error('Error fetching user data', error);
          return of(null);
        })
      );
    }
  }

  clearCache(): void {
    this.usersCache = {};  // Clear users cache
    this.userCache = {};   // Clear individual users cache
  }

  clearUserCache(id: number): void {
    delete this.userCache[id];  // Clear specific user cache
  }
}
