import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-seating',
  templateUrl: './add-seating.component.html',
  styleUrls: ['./add-seating.component.css']
})
export class AddSeatingComponent implements OnInit {
  seatForm: FormGroup;

  section = "";

  constructor(
    private fb: FormBuilder,

    private router: Router
  ) {}

  ngOnInit(): void {
    this.seatForm = this.fb.group({
      section: [''],
      row: [''],
      seat: [''],
    });

  }
  addSeating() {
    return this.seatForm.value

  }

}
