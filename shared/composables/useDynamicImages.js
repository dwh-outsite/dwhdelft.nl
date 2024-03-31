export const useDynamicImages = (importedImageFiles) => {
  const images = Object.entries(importedImageFiles).map(([path, imageModule]) => {
    return {
      name: path.split('/').pop().split('.').shift(),
      path,
      image: imageModule.default,
    }
  })

  console.log(images)

  return {
    image: (name) => images.find((image) => image.name === name)?.image,
  }
}
