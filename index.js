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

  

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].