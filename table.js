/*
File: table.js
HW 3 GUI Assignment: Dynamic Table using JavaScript
Steven Ceballos, UMass Lowell Computer Science, steven_ceballos@student.uml.edu
October 24, 2022 at 3:16 PM    
*/

function generateTable() {
    clearInvalid();
    clearTable();
    var x = false;
    /* get numbers from user input and apply the values to variables designated for each column/row*/
    var row1 = document.getElementById('row1').value;
    var row2 = document.getElementById('row2').value;
    var col1 = document.getElementById('col1').value;
    var col2 = document.getElementById('col2').value;

    if (!row1 || Number(row1) < -50) {
        addInvalid('row1Text', 'Invalid input, plase enter a number greater than -50.')
        x = true;
    }
    if (!row2 || Number(row2) > 50) {
        addInvalid('row2Text', 'Invalid input, plase enter a number less than than 50.')
        x = true;
    }
    if (!col1 || Number(col1) < -50) {
        addInvalid('col1Text', 'Invalid input, plase enter a number greater than -50.')
        x = true;
    }
    if (!col2 || Number(col2) > 50) {
        addInvalid('col2Text', 'Invalid input, plase enter a number less than 50.')
        x = true;
    }

    /* check if num1 is greater than num2 and checks if number is negative */
    if ((Number(row1) > Number(row2)) && (Number(row1) >= 0)) {
        addInvalid('row2Text', 'Invalid input for multiplier. The ending number must bigger than starting number.')
        x = true;
    }

    /* check if num1 is greater than num2 and checks if number is negative */
    if ((Number(col1) > Number(col2)) && (Number(col1) >= 0)) {
        addInvalid('col2Text', 'Invalid input for multiplier. The ending number must bigger than starting number.')
        x = true;
    }

    /* get row and column length and designate variables for those */
    var rowlength = row2 - row1 + 1;
    var collength = col2 - col1 + 1;

    if (x) return;
    /* initial table html and count number i, j */
    var TableFormat = "<table>";
    var i, j;

    /* add table header line to html */
    TableFormat += "<tr><th></th>";
    for (i = 0; i < rowlength; i++) {
        TableFormat += "<th>";
        var num = Number(row1) + i;
        TableFormat += num;
        TableFormat += "</th>";
    }
    TableFormat += "</tr>";

    /* add table data to html */
    for (i = 0; i < collength; i++) {
        TableFormat += "<tr>";
        var colnum = Number(col1) + i;
        for (j = 0; j < rowlength + 1; j++) {
            TableFormat += "<td>";
            if (j == 0) {
                TableFormat += colnum;
            } else {
                var rownum = Number(row1) + j - 1;
                var num = colnum * rownum;
                TableFormat += num;
            }
            TableFormat += "</td>";
        }
        TableFormat += "</tr>";
    }
    TableFormat += "</table>";

    /* output whole table to screen */
    document.getElementById('table').innerHTML = TableFormat;
}

function addInvalid(className, text) {
    var el = document.getElementsByClassName(className);
    console.log(el, text)
    el[0] && (el[0].innerText = text);
}

function clearInvalid() {
    addInvalid('row1Text', '');
    addInvalid('row2Text', '');
    addInvalid('col1Text', '');
    addInvalid('col2Text', '');
}

function clearTable() {
    document.getElementById('table').innerHTML = '';
}