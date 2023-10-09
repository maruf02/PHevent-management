<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer:A:{}</b></summary>
<p>

#### Answer: <b>Answer:-A:{}</b><br/>

<i><b>Explanation:</b><p>Here greeting is a variable that is let type variable,But in second line greetin is a object type.Though it's not define let or const, because of not define it's a global variable and it's value is object type or a object and it's has no property means empty object.Note is that greeting and greetin is not same variable.there are two variable. so,When console greetin that means here console object type so we got output a object and greetin object value is empty.That's why answer is a{}</p></i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: C:"12"</b></summary>
<p>

#### Answer: C:"12"

<i>Here Sum is a function. it's has two parameter a and b. this sum function return sum of a and b.That mean's when we call this function and give two parameter this function return us sum of these two parameter. after that calling sum function with passing parameter, that parameter is 1 and "2". Here are something that need to notice that is two parameter is different first parameter is integer and second parameter is string type. so after calling sum function it's return us sum of 1 and "2". note that when different parameter is doing sum that time it's some looks like concating that integer 1 convert into string 1. and show us result as string sum. That's why Answer is "12".like sum a and b. </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: A:</b></summary>
<p>

#### Answer: A

<i>Here food is a array that has 4 value.Then info is a object that has one property that is favoriteFood nd value is first index of food array.then info.favoriteFood assign a new value of string. But in the last we console only food. that why the result is same as main array.because here object value is changed not array value. if we console info value that time it's show replace item string, mean's new item string.that's why Answer is A:that is same array in food array</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer:B: Hi there, undefined</b></summary>
<p>

#### Answer: B: Hi there, undefined

<i>here sayHi is a function and it has one parameter named as name. this function function return this parameter including Hi there.Then when we calling sayHi function and also console it But we don't give any parameter. that why it's return undefine including Hi there. if we give a parameter suppose "a" that time it's return a including Hi there. So in this question answer is Hi there, undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer: C: 3</b></summary>
<p>

#### Answer: C: 3

<i>Here we declare a let variable name as count and we set it's value is 0. then we create a array with four element named as nums. then we set a loop for every index of nums array. then we set a condition index value is truthy then count increase 1 if index value is falsy count value will same. so we look the array index. in index 0 has value is 0 that is falsy value. that's why count value is unchangable. then index 1 value is 1 that is truthy value. in summary without 0 every positive integer value is truthy. so in array there are 3 positive integer value and every time count value increase 1. ans at last the final count value is 3 that's why Answer is C:3 </i>

</p>
</details>
