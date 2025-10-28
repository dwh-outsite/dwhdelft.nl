async function fetchFiles(folderId) {
  const key = useRuntimeConfig().public.googleKey

  try {
    const url =
      `https://www.googleapis.com/drive/v3/files` +
      `?orderBy=name desc` +
      `&q='${folderId}'%20in%20parents` +
      `&supportsAllDrives=true` +
      `&includeItemsFromAllDrives=true` +
      `&fields=files(id, name, webContentLink, webViewLink, iconLink, thumbnailLink)` +
      `&key=${key}`

    const response = await fetch(url)

    if (!response.ok) {
      console.error(`Failed to fetch files. Status: ${response.status} - ${await response.text()}`)
      return []
    }

    const data = await response.json()

    return data.files.map((file) => ({
      ...file,
      filename: file.name,
      name: file.name.slice(0, file.name.lastIndexOf('.')),
    }))
  } catch (error) {
    console.error(error)
    return []
  }
}

export default (folderId) => {
  const files = ref([])

  fetchFiles(folderId).then((fetchedFiles) => {
    files.value = fetchedFiles
  })

  return files
}
