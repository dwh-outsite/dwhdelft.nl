const fs = require('fs')
const axios = require('axios')

axios
  .get(
    'https://graph.facebook.com/v4.0/239542256096694/events' +
      '?fields=name,cover,start_time&limit=100&time_filter=upcoming&access_token=' +
      process.env.FACEBOOK_PAGE_ACCESS_TOKEN
  )
  .then(response => {
    fs.writeFile('dist/activities.json', JSON.stringify(response.data), 'utf8', () => {})
  })
