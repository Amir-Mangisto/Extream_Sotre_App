
const shoesApi="https://localhost:44373/API/";

export async function GetInfo (){
    try{

        return await  fetch(`${shoesApi}Shoes`)
        .then(res =>{return res.json()})
        .catch(err => console.log(err))
    }
    catch(error){
        console.error(error);
    }
}


// export function GetInfoById (){
//     fetch(`${shoesApi}Shoes/${5}`)
//     .then(res =>res.json())
//     .then(info => console.log(info))
//     .catch(err => console.log(err))
// }
