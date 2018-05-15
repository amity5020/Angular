using Angular.DAL;
using Angular.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular
{
    public class EmployeeBL
    {
        private readonly DBContext dBContext;
        EmployeeDAL employeeDAL;
        public EmployeeBL(DBContext _dbContext)
        {
            dBContext = _dbContext;
            employeeDAL = new EmployeeDAL(dBContext);
        }
        public async Task<List<EmployeeRepo>> GetEmployeeAsync()
        {
            return await employeeDAL.GetEmployeesAsync();
        }
        public async Task<Employee> GetEmployeeByIdAsync(int EmployeeId)
        {
            return await employeeDAL.GetEmployeeById(EmployeeId);
        }
        public async Task<int> SaveEmployee(Employee employee)
        {
            return await employeeDAL.SaveEmployee(employee);
        }
        public async Task<int> UpdateEmployee(Employee employee)
        {
            return await employeeDAL.UpdateEmployee(employee);
        }
        public async Task<int> DeleteEmployee(int EmployeeId)
        {
            return await employeeDAL.Delete(EmployeeId);
        }
        public async Task<List<Designation>> GetDesignations()
        {
            return await employeeDAL.GetDesignations();
        }
    }
}
