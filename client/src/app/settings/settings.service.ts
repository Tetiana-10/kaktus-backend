import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {Injectable} from '@angular/core';
import { SettingsComponent } from './settings.component';
import {SettingModel} from '../setting';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class SettingsService{

  private url = environment.backend; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {}

  addSettings(settings: SettingModel): Observable<SettingsComponent> {
    return this.http.post<SettingsComponent>(this.url, settings, this.httpOptions);
  }
}
