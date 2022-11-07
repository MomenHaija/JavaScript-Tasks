function shorterInArray(arr) {

    let shortvalue = arr[0];
    let shortlength = arr[0].length;
    for (let t = 0; t < arr.length; t++) {
        if (arr[t].length < shortlength) {
            shortlength=arr[t].length;
            shortvalue = arr[t];
        }
    }
    return shortvalue;
}


var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
document.write(shorterInArray(strings));

