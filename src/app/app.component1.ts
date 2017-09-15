import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MdIconRegistry, MdDialog, MdSidenav} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {DialogComponent} from './dialog/dialog.component';
import {Subscription} from 'rxjs/Subscription';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {WindowService} from './windows.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  @ViewChild('sidenav') sidenav: MdSidenav;
  lockLeft = true;
  private _mediaSubscription: Subscription;
  sidenavOpen = true;
  isMobile = false;
  sideNavMode = 'over';

  users = [
    {
      name: 'Lia Lugo',
      avatar: 'svg-11',
      details: 'View the profiles of people named Lia Lugo. Join Facebook to connect with Lia Lugo and others ' +
      'you may know. Facebook gives people the power to share and.',
      isAdmin: true,
      isCool: false
    }, {
      name: 'George Duke',
      avatar: 'svg-12',
      details: 'George Duke (January 12, 1946 – August 5, 2013) was an American musician, known as a ' +
      'keyboard pioneer, composer, singer and producer in both jazz and ...',
      isAdmin: false,
      isCool: true
    }];

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer,
              private dialog: MdDialog, private media: ObservableMedia, private windowService: WindowService) {
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
      this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
      this.sidenavOpen = !this.isMobile;
    });
    this.windowService.width.subscribe((width) => {
      if (width) {
        console.log(width);
        if (width < 800) {
          this.sideNavMode = 'over';
        } else {
          this.sideNavMode = 'side';
          // this.sidenavOpen = true;
          // this.isMobile = false;
        }
      }
    });
  }

  onLinkClick() {
    console.log(this.sideNavMode);
    if (this.isMobile) {
      this.sidenav.toggle();
    }
  }

  ngOnDestroy() {
    this._mediaSubscription.unsubscribe();
  }
}
