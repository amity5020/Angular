import { Component,Input } from '@angular/core';
import { Repository } from '../Repository';
import { Router } from '@angular/router';
import { LoaderService } from '../LoaderService';

////import { Input } from '@angular/core/src/metadata/directives';
@Component({
    selector: 'EmployeeCreate',
    templateUrl: './EmployeeCreate.component.html'
})

export class EmployeeCreate {
    model: EmployeeViewModel;
    designationList: Array<Designation>;
    //@Input() ipmodel: EmployeeViewModel;
    buttonName: number;
    constructor(private repository: Repository, private router: Router, private loaderservice: LoaderService) {
        this.model = new EmployeeViewModel();
        this.designationList = Array<Designation>();
    }
    async ngOnInit() {
        this.loaderservice.display(true);
        this.designationList = await this.repository.GetAsyn("Employee/GetDesignations");
        this.model.Designation = 0;
        this.loaderservice.display(false);   
    }
    async SaveEmployee() {
        this.loaderservice.display(true);
            let res = await this.repository.PostAsyn('Employee/SaveEmployee', this.model);
            if (res == 1) {
                alert('saved Successfully.');
                this.router.navigate(['/home']);
                this.loaderservice.display(false);   
        }
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