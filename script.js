const first = () =>{
    var greet = 'Hi';
    const second = () =>{
        return greet;
    }
    return second;
}

const newFunc = first();
newFunc();








