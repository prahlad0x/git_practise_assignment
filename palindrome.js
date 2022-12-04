let str = "racecar";
ispalindrome = "Palindrome;
for(i=0; i<str.length; i++){
	if(str[i]!==str[str.length-1-i]){
		ispalindrome = "Not a Palindrome"
		break;
	}
}
console.log(ispalindrome)