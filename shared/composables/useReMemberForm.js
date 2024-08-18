const reMemberApiUrl = 'https://remember.dwhdelft.nl/api/forms'

export default (name, rawFields) => {
  const form = new ReMemberForm(name)

  const fields = reactive(rawFields)

  const validationErrors = ref({})

  const state = ref('idle')

  const submit = async (data = {}) => {
    try {
      state.value = 'loading'
      await form.submit({ ...fields, ...data })
      state.value = 'success'
    } catch (error) {
      if (error instanceof ValidationError) {
        validationErrors.value = error.errors()
      }
      state.value = 'error'
    }
  }

  return {
    fields,
    submit,
    state,
    validationErrors,
  }
}

export class ReMemberForm {
  constructor(name) {
    this.name = name
  }

  async submit(data) {
    try {
      const response = await fetch(`${reMemberApiUrl}/${this.name}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.status === 422) {
        const error = await response.json()
        throw new ValidationError(error)
      }

      if (!response.ok) {
        throw new Error(`Failed to submit form. Status: ${response.status}`)
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        throw error
      }
      alert(`An error occurred. If this keeps happening, please send us an email. Error: ${error}`)
    }
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
