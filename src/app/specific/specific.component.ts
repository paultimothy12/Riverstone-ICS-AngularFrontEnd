import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css']
})
export class SpecificComponent {
  id: number | undefined;

  constructor(private router: Router) { }

  handleSubmit() {
    this.router.navigate([`/specificproddetail/${this.id}`]);
  }
}
