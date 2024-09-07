function generateQueryString(values){
 return Object.keys(values) // This returns an array of the keys: ['name', 'age', 'city']
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(values[key]))
    //map iterates over every key and performs the given task in ths case
    /*.map(): This method iterates over each key (name, age, and city):
    For the first key 'name', it performs encodeURIComponent('name') + '=' + encodeURIComponent(values['name']), which results in 'name=John%20Doe'.
    For the second key 'age', it performs encodeURIComponent('age') + '=' + encodeURIComponent(values['age']), which results in 'age=30'.
    For the third key 'city', it performs encodeURIComponent('city') + '=' + encodeURIComponent(values['city']), which results in 'city=New%20York'.*/
    .join('&')
    //combine all elements of an array into a single string, with a specified separator between each element.
}

const params = {
    search: "javascript",
    page: 2,
    sort: 'asc',
}
const queryString = generateQueryString(params);
console.log(queryString);  // search=javascript&page=2&sort=asc

function calculateTotalPrice(cartitems){
  Object.keys(cartitems)
  .map()
}
function authenticateUser(_username,_password){
    
    const storedUser = {
        username: 'user123',
        password: 'securepassword'
    }
    
    if (_username === storedUser.username && _password === storedUser.password){
        return console.log(`welcome, ${_username}`)
    }else{
        return console.log('authenication failed');
    }
}

authenticateUser('user123','securepassword')