


//HOMEWORK

/*

var sequence = function (start, step) {
    var start = start;
    var step = step;
    return function () {
        start += step;
        return start;

    }

}

var generator = sequence(10, 3);
console.log(generator());
console.log(generator());
console.log(generator());

*/
///Не понял как задать значения по умолчанию(0, 1), таким образом чтобы потом можно было безболезнено их менять и сделал всё так как делали на занятии.



//Второе задание не осилил вообще =(



// Третее осилил, при помощи могучего ресёрча и всесильного копипаста =]

/*

var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

var pluck = function (input, field) {
    var output = [];
    for (var i = 0; i < input.length; ++i)
        output.push(input[i][field]);
    return output;
}

var result = pluck(characters, 'name');
console.log(result);

*/