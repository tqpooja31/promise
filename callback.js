function getUsers() {
            getUsersDetails(usersInformation);
  }
  
  async function getUsersDetails(callback){ 
    const resp = await fetch('https://reqres.in/api/users?');
    output = await resp.json();
    callback(output); 
    } 
      
  function usersInformation(output){
      
          const arr=[];
      
          output.data.map((d)=> arr.push(d));
      
          console.log("CALLBACK RESPONSE BEING PRINTED: ");
  
          console.log(JSON.stringify(arr));
    }
    
  
  