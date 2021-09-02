export async function handleResponse(response) {
    if (response.ok) 
      return response.json();
    if (response.status === 400) {
      const error = await response.text();
      throw new Error(error);
    }
    throw new Error("Network response was not ok.");
}

export function handleError(error) {
  console.error(`API call failed: ${error.message}`);
  throw error;
}

export function storeTokenOnLocalStorage(response){

  if(response.hasOwnProperty("access_token"))  {

    response.username = "James Messina"; 
    localStorage.setItem("token", response.access_token);
    localStorage.setItem("name", response.username)

    delete response.access_token;

    console.log(response)
  
    return response; 
  }else{
    
    return handleError(response)
  }
  
}