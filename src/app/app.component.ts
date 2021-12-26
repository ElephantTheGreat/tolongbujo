import { Component } from '@angular/core';
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faDiscord} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website-nft';
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faDiscord = faDiscord;
}
