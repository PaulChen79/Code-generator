// generate_password.js
const sample = (array) => {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

// define generatePassword function
const generatePassword = () => {
    // define things user might want
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = "1234567890"
    const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

    // create a collection to store things user picked up
    const options = {
        length: 12,
        lowercase: 'on',
        uppercase: 'on',
        numbers: 'on',
        symbols: "on",
        excludeCharacters: '123456'
    }
    let collection = []

    if (options.lowercase === "on") {
        collection = collection.concat(lowerCaseLetters.split(""))
    }
    if (options.uppercase === "on") {
        collection = collection.concat(upperCaseLetters.split(""))
    }
    if (options.numbers === "on") {
        collection = collection.concat(numbers.split(""))
    }
    if (options.symbols === "on") {
        collection = collection.concat(symbols.split(""))
    }
    // remove things user do not need
    if (options.excludeCharacters) {
        collection = collection.filter(
            character => !options.excludeCharacters.includes(character)
        )
    }
    // start generating password
    let password = ""
    for (let i = 0; i < Number(options.length); i++) {
        password += sample(collection)
    }

    // return the generated password
    console.log(password)
}

// invoke generatePassword function 
generatePassword()