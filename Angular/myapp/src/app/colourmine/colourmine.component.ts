import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-colourmine',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet],
  templateUrl: './colourmine.component.html',
  styleUrl: './colourmine.component.css'
})
export class ColourmineComponent {
  bgcolormine="background-color:black"
  colurchange():void{
    alert("helllo");
    this.bgcolormine="background-color:red";

    
  }

}

