function countSheeps(list) {
  
    const sheepCount = list.filter(Boolean).length;
    
  
    if (sheepCount > 0) {
        console.log(`There are ${sheepCount} sheep in total`);
    } else {
        console.log("UPS!!! Wolfs eaten Sheeps");
    }
}

const list1 = [ true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true ];
const list2 = [ false, false, false ];

countSheeps(list1); 
countSheeps(list2);
