function generateQueryString(params){
    return Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&')
}

const params ={
    search: 'javascript',
    page: 2,
    sort: 'asc',
}

const querySrting = generateQueryString(params);
console.log(querySrting);

const userData = {
    username: 'user123',
    password: 'strongpassword'
}
function authenticateUser(_username,_password){

    if(_username === userData.username && _password === userData.password){
        return console.log(`welcome ${_username}`);
    }else{
        return console.log('authentication failed')
    }
}

authenticateUser('user123','strongpassword');

function updateTaskStatus(tasks, value){ 
    const newValue = 'completed'

    const updatedTask = tasks.map(task =>{
        if(task.status === value){
            return {...task, status: newValue}
        }else{
            return task;
        }
    }
    )
      /*{ ...current }: This part creates a shallow copy of the task object. All properties from task are included in the new object.
        status: newValue: This part updates the status property to the new value 'completed'.
        current = current running item in the arrey
        the line { id: 1, title: 'task 1', status: 'pending' } represents a single task object.*/
      return updatedTask;
    }

    const tasks =[
        {id: 1, title: 'task 1', status: 'pending'},
        {id: 2, title: 'task 2', status: 'completed'},
        {id: 3, title: 'task 3', status: 'pending'}
    ]

    const updatedTask = updateTaskStatus(tasks, "pending");
    console.log(updatedTask)


   
    function calculateSalary(employees){

        const updatedSalary = employees.map(employe => {
            console.log({employe});
            
            const base = employe.baseSalary;
            const bonus = employe.bonus;
            const deductions = employe.deductions;
            return {...employe, totalSalary: (base + bonus - deductions)}
        })

        return updatedSalary;
    }

    const employees =[
         {
            name: 'alice', 
            baseSalary: 50000, 
            bonus: 5000, 
            deductions: 2000 
        },
         {
            name: 'bob',
             baseSalary: 60000,
              bonus: 3000,
               deductions: 1500 
            }
    ]

    const updatedSalary = calculateSalary(employees);
    console.log(updatedSalary);

    function calculateTotalsalary(cartItems){
        const totalsalary = cartItems.reduce((ne,two) => {
           
            cartItems.forEach(element => {
              if(cartItems)
        })},0)
        console.log(totalsalary)
    }

    const cartItems = [
        {price: 100,
         quantity: 2
        },
        {
         price: 200,
         quantity: 1,
         discount: 10
        }
    ]
    const totalSalary = calculateTotalsalary(cartItems);
    console.log(totalSalary)