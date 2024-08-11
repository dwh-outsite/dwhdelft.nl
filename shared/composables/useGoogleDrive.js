async function fetchFiles(folderId) {
  const url = `https://www.googleapis.com/drive/v3/files` +
    `?orderBy=name desc` +
    `&q='${folderId}'%20in%20parents` +
    `&fields=files(id, name, webContentLink, webViewLink, iconLink, thumbnailLink)` +
    `&key=AIzaSyDwi_l2R3qDWkh2HN8_AmIpy7mk8Ij7nk8`;

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch files.');
  }

  const data = await response.json()

  return data.files.map((file) => ({
    ...file,
    filename: file.name,
    name: file.name.slice(0, file.name.lastIndexOf('.')),
  }))
}

export default (folderId) => {
  const files = ref([])

  fetchFiles(folderId).then((fetchedFiles) => {
    files.value = fetchedFiles
  })

  return files
}
