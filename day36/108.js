"use strict";
function compareStringsIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
const string1 = "Hassan";
const string2 = "hassan";
if (compareStringsIgnoreCase(string1, string2)) {
    console.log("The strings are identical, ignoring case sensitivity.");
}
else {
    console.log("The strings are not identical, ignoring case sensitivity.");
}
