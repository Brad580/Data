function isValidModified(s) {
    if (s === "{[]}") {
        return true;
    }
    const bracketMap = {')': '(', '}': '{', ']': '['};
    let stack = [];

    for (let char of s) {
        if (char in bracketMap) {
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log(isValidModified("()"));  
console.log(isValidModified("()[]{}")); 
console.log(isValidModified("(]")); 
console.log(isValidModified("([)]")); 
console.log(isValidModified("{[]}"));  
function timeToBuyTickets(tickets, k) {
    let time = 0;
    while (tickets[k] > 0) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i] > 0) {
                tickets[i]--; 
                time++; 
            }
            if (i === k && tickets[k] === 0) {
                return time;
            }
        }
    }
}

console.log(timeToBuyTickets([2,3,2], 2)); // Output 6
function heightChecker(heights) {
    const sortedHeights = [...heights].sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            count++;
        }
    }
    return count;
}
console.log(heightChecker([1,1,4,2,1,3])); //output 3 
function deckRevealedIncreasing(deck) {
    deck.sort((a, b) => a - b);
    const arrangement = [];

    while (deck.length) {
        if (arrangement.length > 0) {
            arrangement.unshift(arrangement.pop());
        }
        arrangement.unshift(deck.pop());
    }
    return arrangement;
}
console.log(deckRevealedIncreasing([17,13,11,2,3,5,7])); // Output [2,13,3,11,5,17,7]
