import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'https://tr360-frontend-exam-april.azurewebsites.net/kamarasdorottya66/movies';
  constructor(private http:HttpClient) { }
  getMovieList():any {
      return this.http.get<Movie[]>(this.BASE_URL);
  }
  deleteMovie(id):any {
    return this.http.delete<Movie>(`${this.BASE_URL}/${id}`);
  }
}