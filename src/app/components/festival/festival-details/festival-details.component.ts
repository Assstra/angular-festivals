import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Festival } from 'src/app/models/festival';
import { FestivalformService } from 'src/app/services/festivals/festivalform.service';
import { FestivalsService } from 'src/app/services/festivals/festivals.service';

@Component({
  selector: 'app-festival-details',
  templateUrl: './festival-details.component.html',
  styleUrls: ['./festival-details.component.css'],
})
export class FestivalDetailsComponent {
  festival!: Festival;
  public nameForm!: FormGroup

  constructor(
    private route: ActivatedRoute,
    private festivalsService: FestivalsService,
    private festivalForm: FestivalformService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('festivalId')) {
      const id = this.route.snapshot.paramMap.get('festivalId');
      if (!id) {
        throw Error ('oulaaaa')
      } else {
        this.festivalsService.getFestival(id).subscribe((fest: Festival) => { // navigate to 404 if dosn't exist
          this.festival = fest;
          this.festival.id = id // Setting current festival id
          this.nameForm = this.festivalForm.createFestivalForm(this.festival)
        });
      }
    } else {
      //this.router.navigate(['/404'])
      //this.updateFormFromFestival();
    }
  }

  changeValue() {
    this.festival.name = this.nameForm.value.name;
    this.festival.tablemax_1 = this.nameForm.value.entranceLoc;
    this.festival.tablemax_2 = this.nameForm.value.mainRoomLoc;
    this.festivalsService.addUpdateFestival(this.festival)
    this.router.navigate(['/App']) // Change when list whould be in /festivals
  }
}