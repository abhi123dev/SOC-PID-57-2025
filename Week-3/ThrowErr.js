function checkNumber(value) {
    try {
        if(typeof value != 'number' || isNaN(value)){
            throw new Error(`Invalid: Pleae enter a number`)
        }
        
    } catch (error) {
        console.log("Error! :",error.message)
        
    }
}

