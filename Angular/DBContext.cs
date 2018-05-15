using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular
{
    public partial class DBContext:DbContext
    {
        public DBContext(DbContextOptions<DBContext> options)
           : base(options)
        { }
        public virtual DbSet<Employee> employee { get; set; }
        public virtual DbSet<Designation> designation{ get; set; }

    }
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeAddress { get; set; }
        public string MobileNo { get; set; }
        public string EmailId { get; set; }
        public decimal Salary { get; set; }
        public int Designation { get; set; }
    }
    public class Designation
    {
        public int DesignationId { get; set; }
        public string DesignationName { get; set; }
    }
}
