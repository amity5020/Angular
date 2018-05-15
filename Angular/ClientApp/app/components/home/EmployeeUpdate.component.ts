import { Component,Input } from '@angular/core';
import { Repository } from '../Repository';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoaderService } from '../LoaderService';
//import { Input } from '@angular/core/src/metadata/directives';
@Component({
    selector: 'EmployeeUpdate',
    templateUrl: './EmployeeUpdate.component.html'
})

export class EmployeeUpdate {
    model: EmployeeViewModel;
    designationList: Array<Designation>;
    @Input() ipmodel: EmployeeViewModel;
    buttonName: number;
    constructor(private repository: Repository, private router: Router, private homecomponent: HomeComponent, private loaderService: LoaderService) {
        this.model = new EmployeeViewModel();
        this.designationList = Array<Designation>();
    }
    async ngOnInit() {
        this.loaderService.display(true);
        this.designationList = await this.repository.GetAsyn("Employee/GetDesignations");
        this.model.Designation = 0;
        if (this.ipmodel != null) {
            this.model = this.ipmodel;
            //this.buttonName = buttonName.Update
        }
        this.loaderService.display(false);
       
    }
    async SaveEmployee() {
        this.loaderService.display(true);
            let res = await this.repository.PutAsyn('Employee/UpdateEmployee', this.model);
            if (res == 1) {
                alert('Updated Successfully.');
                this.router.navigate(['/home']);
                this.homecomponent.formToOpen = 0;
        }
        this.loaderService.display(false);
      
    }
}
class Designation {
    public designationName: string;
    public designationId: number;
}
class EmployeeViewModel {
    public EmployeeId: number;
    public EmployeeName: string;
    public EmployeeAddress: string;
    public MobileNo: string;
    public EmailId: string;
    public Salary: number;
    public Designation: number;
    public DesignationName: string;
}
enum buttonName {
    Save,
    Update
}