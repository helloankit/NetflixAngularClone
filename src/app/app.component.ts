import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NetflixClone';

  openAnswer(){
    let element = document.getElementsByClassName('faq-answer')[0];
    console.log(element);
    element.classList.toggle('open');
  }
}
