// Remember we can't index string to change value since strings are immutable
function insert(num) {
    var x = document.form.textview.value;
    if (x.includes('Math.sqrt( )')) {
        var temp = x.search('Math.sqrt(\)');                
        var prev = x.substring(0, temp);
        var str = 'Math.sqrt(' + num + ')';
        document.form.textview.value = prev + str;
    } else if (document.form.textview.value === '0') {
        document.form.textview.value = num;
    } else {
    document.form.textview.value += num;        // Don't need toString since num is coerced
    }
}

function clear() {
    var temp = document.form.textview.value;
    document.form.textview.value = temp.substring(0, temp.length-1);
}

function allClear() {
    document.form.textview.value = "0";
}

function compute() {
    var temp = document.form.textview.value;
    document.form.textview.value = eval(temp);
}

function showHistory() {
    document.getElementById("textt").innerHTML = "different text";
}










