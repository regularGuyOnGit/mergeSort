
function mergeSort(array) {

    //! Divide into 2 halves say leftHalf and rightHalf, until the array is sorted.

    const leftHalf = array.slice(0, Math.floor(array.length / 2));
    const rightHalf = array.slice(Math.floor(array.length / 2));



if(leftHalf.length == 1 && rightHalf.length == 1){
    return compareAndMerge(leftHalf, rightHalf)};

    if(leftHalf.length == 1 && rightHalf.length == 2){
        const temp = mergeSort(rightHalf);
        return  compareAndMerge(leftHalf, temp)
    }

    const exactLeftHalf = mergeSort(leftHalf);
    const exactRightHalf = mergeSort(rightHalf);

    // ! Compare and merge Them.
    return compareAndMerge(exactLeftHalf, exactRightHalf)
};

function compareAndMerge(leftSorted, RightSorted) {

    let comparedValue = []

    if (leftSorted.length < 2 && RightSorted < 2) {
        if (leftSorted > RightSorted) {
            return [...RightSorted, ...leftSorted];
        }
        else {
            return [...leftSorted, ...RightSorted]}}



     else if (leftSorted.length == RightSorted.length ){
        
        const numOfItrations = RightSorted.length + leftSorted.length;

        for( let i = 0 ; i <numOfItrations ; i++){
            if(leftSorted[0]<RightSorted[0]){
                comparedValue.push(...leftSorted.splice(0,1))
            }else{
                comparedValue.push(...RightSorted.splice(0,1))
            }
        }
        leftSorted.map(items => comparedValue.push(items));
        RightSorted.map(items => comparedValue.push(items));
        return comparedValue

     }       

    else if(leftSorted.length < RightSorted.length ){

        const numOfItrations = RightSorted.length;

        for( let i = 0 ; i <numOfItrations ; i++){
            if(leftSorted[0]<RightSorted[0]){
                comparedValue.push(...leftSorted.splice(0,1))
            }else{
                comparedValue.push(...RightSorted.splice(0,1))
            }
        }
        leftSorted.map(items => comparedValue.push(items));
        RightSorted.map(items => comparedValue.push(items));
        return comparedValue
    }

    else if(leftSorted.length > RightSorted.length){
        const numOfItrations = RightSorted.length;
  for( let i = 0 ; i < numOfItrations; i++){
            if(leftSorted[0]<RightSorted[0]){
                comparedValue.push(...leftSorted.splice(0,1))
            }else{
                comparedValue.push(...RightSorted.splice(0,1))
            }
        }
        leftSorted.map(items => comparedValue.push(items))
        RightSorted.map(items => comparedValue.push(items))
        return comparedValue
    };

};

