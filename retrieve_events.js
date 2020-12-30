const fs = require('fs')
const axios = require('axios')

axios
  .get(
    'https://graph.facebook.com/v4.0/199001450132584/events' +
      '?fields=name,cover,start_time&limit=100&time_filter=upcoming&access_token=' +
      process.env.FACEBOOK_PAGE_ACCESS_TOKEN
  )
  .then((response) => {
    fs.writeFile('static/activities.json', JSON.stringify(response.data), 'utf8', () => {})
  })
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
