import axios from 'axios'

const reMemberApiUrl = 'https://remember.dwhdelft.nl/api/forms'

export default class ReMemberForm {
  constructor(name) {
    this.name = name
  }

  submit(data) {
    return axios.post(`${reMemberApiUrl}/${this.name}`, data).catch((error) => {
      if (error.response.status === 422) {
        throw new ValidationError(error.response.data)
      }
      alert('An error occurred. If this keeps happening, please send us an email.')
    })
  }
}

class ValidationError {
  constructor(data) {
    this.data = data
  }

  message() {
    return this.data.message
  }

  errors() {
    if ('errors' in this.data) {
      return this.data.errors
    }
    return []
  }
}
