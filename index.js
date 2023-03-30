
const receivesAFunction = (spy) => console.log(spy());
receivesAFunction((spy) => "Yes, I did it!");


const returnsANamedFunction = (fn) => fn = () => console.log('I worked on this lab for hours');
//It didn't pass until I add fn as a name for the function that I returned. Take no arguments; empty parantheses with no parameter


function returnsAnAnonymousFunction(){
    return function(){console.log('Finally!');}
};

// - The `returnsAnAnonymousFunction` function should:
//   - take no arguments
//   - return an _anonymous function_