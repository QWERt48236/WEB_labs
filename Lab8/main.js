function Employee (name, surname, base_salary, experience)
{
    this.name = name;
    this.surname = surname;
    this.base_salary = base_salary;
    this.experience = experience;
    if(experience > 2)
    {
        this.counted_salary = base_salary+200;
    }
    else if(experience > 5)
    {
        this.counted_salary = base_salary*1.2 + 500;
    }
    else 
    {
        this.counted_salary = base_salary;
    }
}


function Developer (name, surname, base_salary, experience)
{
    var type = "Developer";
    this.type = type;
    var counted_salary;
    Employee.call(this, name, surname, base_salary, experience, counted_salary);
}

function Designer (name, surname, base_salary, experience, effectiveness)
{
    var type = "Designer";
    this.type = type;
    var counted_salary;
    Employee.call(this, name, surname, base_salary, experience, counted_salary);
    this.effectiveness = effectiveness;
    this.counted_salary*=effectiveness;
}

function Manager (name, surname, base_salary, experience, Employee_list)
{
    var counted_salary;
    Employee.call(this, name, surname, base_salary, experience, counted_salary);
    this.Employee_list = Employee_list;

    if(Employee_list.length > 10)
    {
        this.counted_salary += 300;
    }
    else if(Employee_list.length > 5)
    {
        this.counted_salary +=  200;
    }

    var dev_count = 0;
    for(var i = 0; i < Employee_list.length; i++)
    {
        if(Employee_list[i].type == "Developer")
        {
            dev_count++;
        }
    }
    if(dev_count/Employee_list.length > 0.5)
    {
        this.counted_salary*=1.1;
    }
    
}



function Department (Manager_list)
{
    this.Manager_list = Manager_list;
    this.giveSalary = function()
    {
        for(var i = 0; i < this.Manager_list.length; i++)
        {
            console.log(this.Manager_list[i].name, " ", this.Manager_list[i].surname, " отримав ", this.Manager_list[i].counted_salary, " шекєлей");

            for(var j = 0; j < this.Manager_list[i].Employee_list.length; j++)
            {
                console.log(this.Manager_list[i].Employee_list[j].name, " ", this.Manager_list[i].Employee_list[j].surname, " отримав ", this.Manager_list[i].Employee_list[j].counted_salary, " шекєлей");
            }
        }
    }
}



dev = new Developer("ffff", "aaaaa", 1500, 3);
designer = new Designer("ggggg", "dddd", 1000, 2, 0.8);

var Employee_list = [dev, designer];
manager2 = new Manager("nnnn", "vvvvv", 1000, 3, Employee_list);
manager1 = new Manager("hhhhh", "vvhhhh", 1000, 3, Employee_list);

manager_list = [manager1, manager2];
department = new Department(manager_list);
department.giveSalary();