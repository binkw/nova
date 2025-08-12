export async function api(path, options={}){
  const res = await fetch(`http://127.0.0.1:8000${path}`, { 
    headers: { 'Content-Type': 'application/json' }, 
    ...options 
  })
  if(!res.ok) throw new Error(await res.text())
  return res.json()
}
