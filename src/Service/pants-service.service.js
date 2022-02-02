const basicApi="https://localhost:44373/API/";



export async function GetInfo (){
    try{

        return await  fetch(`${basicApi}Pants`)
        .then(res =>{return res.json()})
        .catch(err => console.log(err))
    }
    catch(error){
        console.error(error);
    }
}

