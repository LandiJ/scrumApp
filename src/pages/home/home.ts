import { Component } from "@angular/core";
import {
  NavController,
  IonicPage,
  NavParams,
  ToastController
} from "ionic-angular";
import { Socket } from "ng-socket-io";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  vote: any;
  cards: [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100, "forever", "?", "coffee"];
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private socket: Socket,
    private toastCtrl: ToastController
  ) {}

  sendMessage() {
    this.socket.emit("add-vote", this.vote);
    this.vote = "";
  }
}
