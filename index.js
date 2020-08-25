var twoSum = function(nums, target) {
    var solution={};
    for (let i = 0; i < nums.length; i++) {
      if (target-nums[i] in solution) {
          return [solution[target-nums[i]],i]
      } else {
        solution[nums[i]]=i;
      }
    } 
  };

  

//   input [2,7,11,15]
//         9
//   output [0,1]