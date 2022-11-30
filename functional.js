const concat = (str1) => {
    return (str2) => {
        return () => str1 + str2
    }
}

console.log(concat("Mr.")("Gor")())
