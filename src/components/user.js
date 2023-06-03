import { API_URL } from "../components/constants";

export async function registerApi(formData) {
  try {
    const url = `${API_URL}/auth/local/register`;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, params);
    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function loginApi(formData) {
  try {
    const url = `${API_URL}/auth/local`;
    
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, params);
    const result = response.json();
    console.log('Hellllooooo')
    console.log(result)
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
