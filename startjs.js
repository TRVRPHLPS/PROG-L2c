


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
///�� ����� ��� ������ �������� �� ���������(0, 1), ����� ������� ����� ����� ����� ���� ������������ �� ������ � ������ �� ��� ��� ������ �� �������.



//������ ������� �� ������ ������ =(



// ������ ������, ��� ������ �������� ������ � ����������� ��������� =]

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