function filteredArray (array, minnumber, maxnumber) {
    const newArray = []
    array.forEach(number => {
        if (number < maxnumber && number > minnumber){
            newArray.push(number)
        }
    });
    return newArray
}