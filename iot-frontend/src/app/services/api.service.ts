import { Devices } from '../models/devices';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token = '';
  private jwtToken$ = new BehaviorSubject<string>(this.token);
  private API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient,
              private router: Router,
              private toast: ToastrService) {
    const fetchedToken = localStorage.getItem('act');

    if (fetchedToken) {
      this.token = atob(fetchedToken);
      this.jwtToken$.next(this.token);
    }

  }

  get jwtUserToken(): Observable<string> {
    return this.jwtToken$.asObservable();
  }

  /* Getting All Todos */
  getAllDevices(): Observable<Devices[]> {
    return this.http.get<Devices[]>(`${this.API_URL}/devices`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  getOneDevice(id : number): Observable<Devices> {
    return this.http.get<Devices>(`${this.API_URL}/devices/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  postDevice(name : string, imei : string, weight : number, longtitude : number ,latitude : number): Observable<Devices> {
    return this.http.post<Devices>(`${this.API_URL}/devices`, {name,imei,weight,longtitude,latitude}, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  putDevice(id: number, name : string, imei : string, weight : number, longtitude : number ,latitude : number): Observable<Devices> {
    return this.http.put<Devices>(`${this.API_URL}/devices/${id}`,{id,name,imei,weight,longtitude,latitude}, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }


  // updateStatus(statusValue: string, todoId: number) {
  //   return this.http.patch(`${this.API_URL}/todos/${todoId}`, {status: statusValue}, {
  //     headers: {
  //       Authorization: `Bearer ${this.token}`
  //     }
  //   }).pipe(
  //     tap(res => {
  //       if (res) {
  //         this.toast.success('Status updated successfully', '', {
  //           timeOut: 1000
  //         });
  //       }
  //     })
  //   );
  // }

  deleteDevice(id: number):Observable<Devices> {
    return this.http.delete<Devices>(`${this.API_URL}/devices/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      tap(res => {
        // @ts-ignore
        if (res.success) {
          this.toast.success('Device deleted successfully');
        }
      })
    );
  }

  login(username: string, password: string) {

    this.http.post(`${this.API_URL}/auth/login`, {username, password})

      .subscribe((res: any) => {
        this.token = res.token;

        if (this.token) {
          this.toast.success('Login successful, redirecting now...', '', {
            timeOut: 700,
            positionClass: 'toast-top-center'
          }).onHidden.toPromise().then(() => {
            this.jwtToken$.next(this.token);
            localStorage.setItem('act', btoa(this.token));
            this.router.navigateByUrl('/location').then();
          });
        }
      }, (err: HttpErrorResponse) => {
        this.toast.error('Authentication failed, try again', '', {
          timeOut: 1000
        });
      });
  }


  logout() {
    this.token = '';
    this.jwtToken$.next(this.token);
    this.toast.success('Logged out succesfully', '', {
      timeOut: 500
    }).onHidden.subscribe(() => {
      localStorage.removeItem('act');
      this.router.navigateByUrl('/auth/login').then();
    });
    return '';
  }

}