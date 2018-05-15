import { Component } from '@angular/core';
import { Repository } from '../Repository';
import { LoaderService } from '../LoaderService';
import { Router } from '@angular/router';
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    EmployeeList: Array<EmployeeViewModel>;
    empmodel: EmployeeViewModel;
    formToOpen: number;
    loader: boolean;
    constructor(private repository: Repository, private loaderService: LoaderService, private router: Router) {
        //super();
    }
    ngOnInit() {
        this.loaderService.display(true);
        this.formToOpen = formopen.List;
        this.GetEmployee();
        this.loaderService.display(false);

    }
    async GetEmployee() {
        this.EmployeeList = new Array<EmployeeViewModel>();
        this.EmployeeList = await this.repository.GetAsyn("http://localhost:54269/Employee/GetEmployeeAsync");
       
      //  console.log(this.EmployeeList);
    }
    async Edit(Employeemodel: any) {
        this.empmodel = new EmployeeViewModel();
        this.empmodel.EmployeeId = Employeemodel.employeeId;
        this.empmodel.EmployeeName = Employeemodel.employeeName;
        this.empmodel.EmployeeAddress = Employeemodel.employeeAddress;
        this.empmodel.MobileNo = Employeemodel.mobileNo;
        this.empmodel.EmailId = Employeemodel.emailId;
        this.empmodel.Designation = Employeemodel.designation;
        this.empmodel.Salary = Employeemodel.salary;
        this.formToOpen = formopen.Edit;
    }
    async linkclick() {
        this.formToOpen = 0;
    }
    async Delete(EmployeeId: number) {
        if (confirm('Are u Sure Delete This Employee.') == true) {
            debugger;
            let res = await this.repository.DeleteAsyn('Employee/DeleteEmployee?EmployeeId=' + EmployeeId);
            if (res == 1) {
                alert('Deleted Successfully');
               this.ngOnInit();
            }
        }
    }
}
 enum formopen {
    List,
    Edit
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
