# For-Loop-in-Javascript
#Table for visualization how code executes in js engine.


Apply the for loop logic in JavaScript and explain how the for loop executes through responsive table using media queries (max-width)


syntax :  For Loop

for(initialExpression; condition, updateExpression)  {
    // code block executed here repeatedly
}

let’s break down how code executes in a for loop

initialExpression: 

This expression is executed once at the beginning of the loop.
It typically initializes a counter variable 

Example: ( let i = 0;).

condition: 
This expression is evaluated before each iteration.
If the condition evaluates to true, the code block inside the loop is executed.
If it evaluates to false, the loop terminates(end).

Example: (i <= 5 )

updateExpression: 
This expression is executed after each iteration of the code block.
It typically updates the counter variable 

Example: (i++, i--, i += 2)

Example of Code: 
This counts from 0 to 5 

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

Output:
1
2
3
4
5



