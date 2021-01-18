const arr = [2, 4, 3, 7, 7, 9, 8];
const arr1 = [2, 1];
const arr2 = [1, 2, 3, 4, 5, 7];
const arr3 = [2, 1, 4];

const change = (arr) => {
  let i = 0, j = arr.length - 1;

  while(i < j) {
    if(arr[i] % 2 === 0) {
      if(arr[j] % 2 === 1) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else {
            while(arr[j] % 2 === 0 && j > i) {
                j--; 
            console.log(j,"jll")

            }

            [arr[i], arr[j]] = [arr[j], arr[i]]; 
            console.log("jll",j)

      }
    }

    i++;
  }

  console.log(arr);
};

change(arr);