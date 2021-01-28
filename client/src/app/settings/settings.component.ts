import { Component, OnInit } from '@angular/core';
import { SettingModel } from '../setting';
import {SettingsService} from './settings.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  model = new SettingModel(20, 30, "red");
  submitted = false;

  onSubmit() {
    this.settingsService.addSettings(this.model)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error!', error)
      );
  }
  constructor(private settingsService: SettingsService) {
  }
}
