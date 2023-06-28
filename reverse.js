// function reverseName('nameOne','nameTwo') {
//     let friendNameOneLength = nameOne.length;
//     let friendNameTwoLength = nametwo.length;

//     if (friendNameOneLength > friendNametwoLength) {
//         return nameOne.split("").reverse(), join("");
       
//     }
//     else {
//         return nameTwo.split("").reverse(), join("");
//     }
    
// }
// let result = reverseName('rezwanul', 'Rimel');
// console.log(result);


function ReverseName(nameOne, NameTwo) {
    let FriendNameOneLength = nameOne.length;
    let FriendNameTwoLength = NameTwo.length;

    if (FriendNameOneLength > FriendNameTwoLength) {
        return nameOne.split("").reverse().join("");
    }
    else {
        return NameTwo.split("").reverse().join("");
    }
    
}
let result = ReverseName("Kazi", "rezwanul");
console.log(result);