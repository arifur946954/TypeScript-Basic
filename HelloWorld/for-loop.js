var val = [1, 5, 3, 6, 7, 5, 2.5, 55];
var total = 0;
for (var i = 0; i < val.length; i++) {
    var val_1 = [1, 5, 3, 6, 7, 5, 2.5, 55];
    total += val_1[i];
    console.log(total);
}
var avg = total / val.length;
console.log("total is :" + total);
console.log("average is:" + avg);
