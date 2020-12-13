import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gro';
  summaryCart:any;
  topCategory: any;
  mainBody:any;
  constructor() { }

  ngOnInit(): void {
  }

  

 
}
