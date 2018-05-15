using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular.Repo;
using Microsoft.AspNetCore.Mvc;

namespace Angular.Controllers
{
    [Route("Employee")]
    public class EmployeeController : Controller
    {
        private readonly DBContext dBContext;
        EmployeeBL employeeBL;
        public EmployeeController(DBContext _dbContext)
        {
            dBContext = _dbContext;
            employeeBL = new EmployeeBL(dBContext);
        }
        [HttpGet]
        [Route("GetEmployeeAsync")]
        public async Task<List<EmployeeRepo>> GetEmployeeAsync()
        {
            return await employeeBL.GetEmployeeAsync();
        }
        [HttpGet]
        [Route("GetEmployeeByIdAsync")]
        public async Task<Employee> GetEmployeeByIdAsync(int EmployeeId)
        {
            return await employeeBL.GetEmployeeByIdAsync(EmployeeId);
        }
        [HttpPost]
        [Route("SaveEmployee")]
        public async Task<int> SaveEmployee([FromBody]Employee employee)
        {
            return await employeeBL.SaveEmployee(employee);
        }
        [HttpPut]
        [Route("UpdateEmployee")]
        public async Task<int> UpdateEmployee([FromBody]Employee employee)
        {
            return await employeeBL.UpdateEmployee(employee);
        }
        [HttpDelete]
        [Route("DeleteEmployee")]
        public async Task<int> DeleteEmployee(int EmployeeId)
        {
            return await employeeBL.DeleteEmployee(EmployeeId);
        }

        [HttpGet]
        [Route("GetDesignations")]
        public async Task<List<Designation>> GetDesignations()
        {
            return await employeeBL.GetDesignations();
        }
    }
}