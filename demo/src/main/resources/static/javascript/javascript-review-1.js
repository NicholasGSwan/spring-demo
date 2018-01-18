"use strict";
//alert("the javascript is working");


(function () {
	//function for finding the maximum sum of subsequent numbers in an array
	function maxSubsequentSum(someArray){
		var maxSum = 0;
		var currentSum = 0;
		for (var i = 0; i<someArray.length-1; i++){
			currentSum = someArray[i];
			for(var j = i+1; j<someArray.length; j++){
				currentSum += someArray[j];
				if(currentSum>maxSum){
					maxSum = currentSum;
				}
			}
		}
		return maxSum;
	}
	var array1 = [-1, -3, 4, -1, -2, 1, 5, -3];
	var array2 = [-7, 1, -3, 4, -1, 2, 1, -5, 4];
	console.log(maxSubsequentSum(array1));
	console.log(maxSubsequentSum(array2));
})();
