export async function getNotes(url) {
    const response= await fetch(url);
    const data =await response.json();
    return data;

}