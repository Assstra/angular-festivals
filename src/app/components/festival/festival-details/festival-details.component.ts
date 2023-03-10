import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Festival } from 'src/app/models/festival';

@Component({
  selector: 'app-festival-details',
  templateUrl: './festival-details.component.html',
  styleUrls: ['./festival-details.component.css']
})

export class FestivalDetailsComponent {
  @Input() festival!: Festival;

  public nameForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnChanges(): void {
    this.nameForm = this.formBuilder.group({
      name: [this.festival.name, [Validators.required, Validators.minLength(4)]],
      entranceLoc : [this.festival.tablemax_1, [Validators.required, Validators.min(60)]],
      mainRoomLoc : [this.festival.tablemax_2, [Validators.required, Validators.min(70)]],
    })
  }

  changeValue(){
    this.festival.name = this.nameForm.value.name
    this.festival.tablemax_1 = this.nameForm.value.entranceLoc
    this.festival.tablemax_2 = this.nameForm.value.mainRoomLoc
  }
}
