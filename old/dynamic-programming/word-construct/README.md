# Word Construction

## canConstruct

Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed.

### Examples

```js
canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) // true
canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']) // false
canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']) // true
```

## CountConstruct

Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed.

### Examples for countConstruct

```js
countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) // 1
countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']) // 0
countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']) // 4
```

## AllConstruct

Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a 2D array containing all of the ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

Each element of the 2D array should represent one combination that constructs the `target`.

You may reuse elements of `wordBank` as many times as needed.
