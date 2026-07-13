# Closures Summary

- A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.

- a closure gives a function access to all the variables from its parent scope, even after the parent function has return. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

- a closure makes sure that a function doesn't loose connection to variables that existed at the functions creation time / birthplace.

- a closure is like a backpack that a function carries around wherever it goes. The backpack contains all the variables that present in the environment in which the function was created
  - 🚶‍♂️ function  🎒 closure   🗒️  variables

We do not have to manually create closures, this is a JS feature that happens automatically. We can't even access closed-over variables. A closure is NOT a tangible JavaScript object that we can access. It's simply a feature of the language that allows functions to have access to variables from their parent scope, even after the parent function has finished executing.
