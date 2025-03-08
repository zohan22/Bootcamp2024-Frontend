/*
Write a JS program to concat arrays.
Sample: let data = [["The","little","horse"],
                   ["Plane","over","the","ocean"],
                   ["Chocolate","ice","cream","is","awesome"],
                   ["this","is","a","long","sentence"]]
Output: ['The little horse', 
        'Plane over the ocean',
        'Chocolate ice cream is awesome',
        'this is a long sentence']
*/

const data = [["The","little","horse"],
              ["Plane","over","the","ocean"],
              ["Chocolate","ice","cream","is","awesome"],
              ["this","is","a","long","sentence"]]

const output = data.map(element => element.join(' '));
console.log(output);