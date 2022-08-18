const Employee = require('../models/Employee');

const getAllEmployees = async (req,res) => {
  try{
    const employees = await Employee.find();
    res.status(200).json(employees);
  }catch(err){
    res.status(500).json({error: err});
  }
}

const getEmployeeById = async(req,res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
  } catch(err){
    res.status(500).json({error: err});
  }
}

const updateEmployee = async(req,res) =>{
  try{
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body,{new : true, runValidators : true});
    res.status(200).json(employee);
  } 
  catch(err){
    res.status(500).json({error: err});
  }
}

const deleteEmployee = async(req,res) => {
  try{
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200);json({message : "Employee deleted successfully !"});
  } catch(err){
    res.status(500).json({error: err});
  }
}

const createEmployee = async(req,res) => {
  try{
    const employee = await Employee.create(req.body);
    res.status(200).json(employee);
  }catch(err){
    res.status(500).json({error: err});
  }
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  createEmployee,
  deleteEmployee
}