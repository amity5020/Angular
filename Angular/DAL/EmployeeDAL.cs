using Angular.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.DAL
{
    public class EmployeeDAL
    {
        private readonly DBContext dBContext;
        public EmployeeDAL(DBContext _dbContext)
        {
            dBContext = _dbContext;
        }
        public async Task<List<EmployeeRepo>> GetEmployeesAsync()
        {
            var res = dBContext.employee.Join(dBContext.designation, r => r.Designation, p => p.DesignationId, (r, p) => new EmployeeRepo
            {
                EmployeeName=r.EmployeeName,
                EmployeeAddress=r.EmployeeAddress,
                MobileNo=r.MobileNo,
                EmailId=r.EmailId,
                EmployeeId=r.EmployeeId,
                Salary=r.Salary,
                Designation=r.Designation,
                DesignationName=p.DesignationName
            });
            return res.ToList();
        }
        public async Task<Employee> GetEmployeeById(int EmployeeId)
        {
            return dBContext.employee.Where(r => r.EmployeeId == EmployeeId).FirstOrDefault();
        }
        public async Task<int> SaveEmployee(Employee employee)
        {
            try
            {
                await dBContext.employee.AddAsync(employee);
                await dBContext.SaveChangesAsync();
                return 1;
            }catch(Exception e)
            {
                return 0;
            }
        }
        public async Task<int> UpdateEmployee(Employee employee)
        {
            var emp = dBContext.employee.Where(r => r.EmployeeId == employee.EmployeeId).FirstOrDefault();
            emp.EmployeeName = employee.EmployeeName;
            emp.EmployeeAddress = employee.EmployeeAddress;
            emp.MobileNo = employee.MobileNo;
            emp.EmailId= employee.EmailId;
            emp.Salary= employee.Salary;
            emp.Designation= employee.Designation;
            await dBContext.SaveChangesAsync();
            return 1;
        }
        public async Task<int> Delete(int EmployeeId)
        {
            var emp = dBContext.employee.Where(r => r.EmployeeId == EmployeeId).FirstOrDefault();
            dBContext.employee.Remove(emp);
            await dBContext.SaveChangesAsync();
            return 1;
        }
        public async Task<List<Designation>> GetDesignations()
        {
            return dBContext.designation.ToList();
        }
    }
}
