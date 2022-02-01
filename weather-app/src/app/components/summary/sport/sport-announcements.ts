import { Component, EventEmitter, Input, Output, Inject, HostListener, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrentWeatherDto } from 'src/app/services/dto/current-weather';
import { ForecastDto } from 'src/app/services/dto/forecast';
import * as moment from 'moment';
import { ForecastdayDto } from 'src/app/services/dto/forecast-day';
import { MatChipList } from '@angular/material/chips';
import { HourDto } from 'src/app/services/dto/hour';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FullForecastDto } from 'src/app/services/dto/full-forecast';
import { BaseNightModeComponent } from '../../base-nightmode-component';
import { NightModeService } from 'src/app/services/night-mode.service';
import { SportDisciplineToEvents } from './sport-discipline-to-events';

@Component({
  selector: 'sport-announcements',
  templateUrl: './sport-announcements.html',
  styleUrls: ['./sport-announcements.scss']
})
export class SportAnnouncements extends BaseNightModeComponent {
    @Input() sportData: SportDisciplineToEvents[]
}
