import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any = '';
  password: any = '';
  loggedIn: boolean;

  mobileccCode: any = '';
  mobileNumber: any = '';
  mobilePassword: any = '';
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalController: ModalController
  ) {

  }

  ngOnInit() {
  }


  login() {
    console.log('login');
    this.navCtrl.navigateForward('register');
  }

  ionViewDidEnter() {
    console.log('enter');
  }

  create() {
    this.router.navigate(['register']);
  }

  reset() {
    this.router.navigate(['reset-password']);
  }


  async openCountry() {
    console.log('open ccode');
  }

  onPhoneLogin() {
  }
  onOTPLogin() {
  }
  async openModal(uid) {
      }
}
