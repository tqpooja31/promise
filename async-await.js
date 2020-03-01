async function fetchUsers()
{
    try{

        const resp = await fetch('https://reqres.in/api/users?');

        const output = await resp.json();

        let arr=[];
    
        output.data.map((r)=> arr.push(r));
    
        console.log("My local array using async-await function");

        console.table(JSON.stringify(arr));

    }
    catch(e)
    {
      console.log("Oh No!!! Error is occured");    
    }
    
  
 
    // for(let i=0;i<results.data.length;i++)
    // {
    //     emparr.push(results.data[i]);
    // }
    
    
    
    // for(let j=0;j<emparr.length;j++)
    // {
    //     console.log(this.emparr[j]);
    // }
   
    // emps_name =results.map(name => results.employee_name);
    // let emps_name = JSON.parse(JSON.stringify(results)); 
   
    // console.log(emps_name);
    //return emps_name;
  }
   
//   fetchEmployees().catch(handleError);

//   function handleError(err) 
//   {
//     console.log('OH NO!');
//     console.log(err);
//     }
