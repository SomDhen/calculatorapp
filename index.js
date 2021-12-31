// Displaying Input numbers
function display(val) {
    document.getElementById('input-id').value+=val;
}

// Displayiing total results
function solve() {
    let x = document.getElementById('input-id').value;
    let y = eval(x);
    document.getElementById('input-id').value = y;
}

// Clearing Values
function clr() {
    document.getElementById('input-id').value= " ";
}