import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  siteLanguage: any = 'English';
  siteLocale: any='English';
  languageList = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' }
  ];
  
  constructor() { }

  ngOnInit(): void {
    this.siteLocale = window.location.pathname.split('/')[1];
    console.log(this.siteLocale);
    this.siteLanguage = this.languageList.find(f => f.code === this.siteLocale)?.label;
    console.log(this.siteLanguage);
 }
}
