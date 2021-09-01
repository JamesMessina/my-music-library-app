export async function handleResponse(response) {
    if (response.ok) return response.json();
    if (response.status === 400) {
      const error = await response.text();
      throw new Error(error);
    }
    throw new Error("Network response was not ok.");
}

export function handleError(error) {
  console.error(`API call failed: ${error}`);
  throw error;
}

export function storeTokenOnLocalStorage(response){

  
  localStorage.setItem("token", response.access_token);

  response.name = "James Messina"; 

  delete response.token;

  return response; 
  
}