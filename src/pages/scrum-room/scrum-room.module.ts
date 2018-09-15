import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScrumRoomPage } from './scrum-room';

@NgModule({
  declarations: [
    ScrumRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(ScrumRoomPage),
  ],
})
export class ScrumRoomPageModule {}
