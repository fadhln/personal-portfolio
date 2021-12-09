export async function fetchMD(mdFilePath){
  const response = await fetch(mdFilePath)
  return await response.text()
}