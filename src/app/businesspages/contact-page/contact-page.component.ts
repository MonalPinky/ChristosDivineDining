import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  showMSG = false;
  number = 0;
  optionchoice = '';
  optionValidation() {
    if (this.optionchoice === 'Subject*') {
      alert('Please select a Subject');
    }
  }
  showmsg() {
    // alert(this.number);

    if (this.number == 0) {
      if (this.showMSG == true) {
        this.showMSG = false;
        // alert(this.number);
        this.number = this.number + 1;
      } else {
        this.showMSG = true;
        this.number = this.number + 1;
      }
    }
  }
}
