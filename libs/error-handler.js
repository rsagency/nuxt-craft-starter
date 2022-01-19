export default err => {
    console.log(err.response)
    return {
        inputErrors: err.response.data.errors,
        formErrors: `${err.response.status} ${err.response.statusText}`,
    }
}
