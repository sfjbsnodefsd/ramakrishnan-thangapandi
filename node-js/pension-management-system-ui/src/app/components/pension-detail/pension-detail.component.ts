import { Component, OnInit } from '@angular/core';
import Pensioner from 'src/app/entity/pensioner';
import User from 'src/app/entity/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pension-detail',
  templateUrl: './pension-detail.component.html',
  styleUrls: ['./pension-detail.component.css']
})
export class PensionDetailComponent implements OnInit {
  user: User= new User();
  pensioner: Pensioner= new Pensioner();
  constructor(private userService: UserService) { }
  getPensionerByAadhar(){
  const observables = this.userService.getPensionerByAadhar(this.user);
  observables.subscribe(
    (response: any) => {
      this.pensioner=response.pensioner;
      //console.log(response);        
    }, function (error) {
      console.log(error);

    }
  );
  }

  ngOnInit(): void {
  }

}
