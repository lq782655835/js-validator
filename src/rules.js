const strategys = {
    isNonEmpty: (value, errorMsg) => {
        if (value === '') return errorMsg
    },
    minLength: (value, length, errorMsg) => {
        if (value.length < length) return errorMsg
    }
}

export default strategys
