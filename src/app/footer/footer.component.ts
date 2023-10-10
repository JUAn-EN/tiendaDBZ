import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  cloudsArray = Array.from({ length: 15 }, (_, i) => i + 1);
  magicCloudsArray = Array.from({ length: 5 }, (_, i) => i + 1);
  wavesArray = Array.from({ length: 3 }, (_, i) => i + 1);
  bushsArray = Array.from({ length: 15 }, (_, i) => i + 1);
  rocksArray = Array.from({ length: 2 }, (_, i) => i + 1);
  leafsArray = Array.from({ length: 5 }, (_, i) => i + 1);

}
