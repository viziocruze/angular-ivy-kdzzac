import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
   list = [{name:'Groundnut',value:45,color:'#cba694'},{name:'Groundnut',value:55,color:'#fce384'},{name:'Groundnut',value:75,color:'#594763'},{name:'Groundnut',value:85,color:'#4e906d'},{name:'Groundnut',value:45,color:'#cba694'},{name:'Groundnut',value:55,color:'#fce384'},{name:'Groundnut',value:75,color:'#594763'},{name:'Groundnut',value:85,color:'#4e906d'}]
}
