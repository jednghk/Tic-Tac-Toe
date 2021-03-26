# Tic Tac Toe
[Live Preview](https://jednghk.github.io/Tic-Tac-Toe/tictactoe.html)

[Link to official project description](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/tic-tac-toe)

## Reflections
Hi guys!

The project is a simple tic tac toe game where two players will take turns putting their markers, and the first to match three in a row wins.

My primary focus for this project was learning to create programs entirely from javascript rather than relying on HTML. Another focus was incorporating factory functions and the revealing module pattern in my code for further organisation and reducing global variables.

Prior to this project, all my variables had been defined in a global scope which eventually led to me having
to rephrase variable names so they didn't clash. However I still felt I don't have a grasp on how the revealing
module pattern should be implemented so I hope to revisit this in the future. Nonetheless, I'm quite proud
that I managed to organise my code in a relatively neat manner. I made sure every function had a "single resposibility"
so that any problems or bugs boiled down to one function scope.

However, there are some scopes that in hindsight could have been nested further and did not need to pollute
the top level scope. I also didn't need to store the board as an associative array, but a normal array would
have sufficed.

The primary challenge for this problem was organising the code in a comprehensive manner and fitting all the
functionality in logical places.

