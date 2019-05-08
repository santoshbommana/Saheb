import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  data: object = {
    emailid: "",
    password: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToOtherPage() {
    console.log(this.data);
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(HomePage).then(() => {
      const startIndex = this.navCtrl.getActive().index - 1;
      this.navCtrl.remove(startIndex, 1);
    });



  }

}
