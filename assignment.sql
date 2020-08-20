SELECT employee_project.emp_id, employee_project.project_id, employee.emp_name, employee.department
FROM employee_project
    JOIN employee
    ON employee_project.emp_id = employee.id
WHERE employee.id=1;