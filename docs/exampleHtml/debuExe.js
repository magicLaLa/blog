let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]

const solution2 = (arr1, arr2) => {
  let result = []
  for (let item of arr1) {
    if (arr2.includes(item)) {
      result.push(item)
    }
  }

  return [...new Set(result)]
}

console.log('solution2', solution2(nums1, nums2))