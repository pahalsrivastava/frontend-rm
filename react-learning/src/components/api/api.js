export async function fetchData(){
    const res = await fetch('/api/data');
    return res.json();
}