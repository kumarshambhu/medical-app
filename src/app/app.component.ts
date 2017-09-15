import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MdIconRegistry, MdDialog, MdSidenav} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {DialogComponent} from './dialog/dialog.component';
import {Subscription} from 'rxjs/Subscription';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  @ViewChild('leftsidenav') leftsidenav: MdSidenav;
  @ViewChild('rightsidenav') rightsidenav: MdSidenav;
  private _mediaSubscription: Subscription;
  isMobile = false;

  users = [
    {
      name: 'Lia Lugo',
      avatar: 'svg-11',
      details: 'View the profiles of people named Lia Lugo.',
      isAdmin: true,
      isCool: false
    }, {
      name: 'George Duke',
      avatar: 'svg-12',
      details: 'George Duke (January 12, 1946 – August 5, 2013)',
      isAdmin: false,
      isCool: true
    }];

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer,
              private dialog: MdDialog, private media: ObservableMedia) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }

  selectedUser = this.users[0];

  private openAdminDialog() {
    this.dialog.open(DialogComponent);
  }

  ngOnInit() {
    this._mediaSubscription = this.media.asObservable().subscribe((change: MediaChange) => {
      console.log('change.mqAlias: ' + change.mqAlias);
      /*this.isMobile = true;
      this.sidenav.close();*/
      this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
    });
  }

  onLinkClick() {
    if (this.isMobile) {
      this.leftsidenav.toggle();
    }
  }

  ngOnDestroy() {
    this._mediaSubscription.unsubscribe();
  }
}
