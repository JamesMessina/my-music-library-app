
export async function handleResponse(response) {
  if (response.ok) return response.json();
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


    const user = response.name; 
    const token = response.accessToken; 
    localStorage.setItem("token", user);
    localStorage.setItem("name", token)

    delete response.access_token;

    console.log(response)
  
    return response; 
  
}