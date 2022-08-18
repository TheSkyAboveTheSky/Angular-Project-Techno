const {Router} = require("express");
employeeRouter = Router();
const {getAllEmployees,getEmployeeById,updateEmployee,createEmployee,deleteEmployee} =require('../controllers/employeeController');

employeeRouter.get('/',getAllEmployees);
employeeRouter.get('/:id',getEmployeeById);
employeeRouter.post('/',createEmployee);
employeeRouter.delete('/:id',deleteEmployee);
employeeRouter.put('/:id',updateEmployee);

module.exports = employeeRouter;