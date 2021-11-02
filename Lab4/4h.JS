function findSecondSmallestBiggest(numbers){
    var second_highest = numbers.sort(function(a, b) { return b - a; })[1];
    var second_smallest = numbers.sort(function(a, b) { return a - b; })[1];
    return [second_smallest,second_highest];
} 
var arr = [15, 67, 654, 321, 789, 398];
console.log(findSecondSmallestBiggest(arr));