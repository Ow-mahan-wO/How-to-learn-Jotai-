--> you can Download Pdf this Readme . It is available in the repository files

# How to learn Jotai ?!

![Jotai Logo](./images/logo.jpg "Jotai")

### First of all, I want to give a basic explanation about stateManagement.

### In our state managers, we have three types of architecture: flux, proxy, and atomic, each of which has a different structure and is not very similar. In flux architecture we have redux and zustand for example and in proxy architecture we have Mobx for example and in Atomic architecture we have Jotai or Recoil for example

# What is Jotai ?

### Jotai is a relatively new state management library for React which works with (atom). It's simple, but make no mistakes, it's a robust library.

### Jotai is based on the new Recoil pattern and library by Facebook.

# Why we should learn Jotai ?!

### Redux is often used in large-scale projects due to its ability to maintain states at a large scale. If we want to use state managers in a small project, Redux doesn't seem reasonable and we have to use the context API. However, Jotai comes to our aid and makes managing states in the program easy with its atomic structure and is very fast and convenient. This is one reason to learn Jotai, and another reason may be that we have the opportunity to get acquainted with other architectures and state managers.

# How to learn Jotai ?

### We learn step by step with the official jotai document and its practice. Let's go to start.

# Lesson 1:

## at first you most install jotai in Project:"

```
npm install jotai
###
yarn add jotai
```

## and at second step we should set Provider for jotai to be able to access them:

```javascript
./main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import {Provider} from 'jotai'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider>
    <App />
  </Provider>
  </React.StrictMode>,
)

```

## Creating your first atom

### Jotai atoms are small isolated pieces of state. Ideally, one atom contains very small data. Here's how you create your first atom.

```javascript
import { atom } from "jotai";
const counter = atom(0);
```

### t is as simple to use as React’s integrated (useState) hook, but all state is globally accessible.

```javascript
const [count, setCounter] = useAtom(counter);
```

### The atom we created is to be passed to (useState) hook with the help of jotai (useAtom) function, which returns an array, where the 1st element is the value of atom, and the 2nd element is a function used to set the value of the atom.

### Jotai considers anything to be an atom so you can create any type of atom you want whether it is atom of objects, arrays, or nested objects.

```javascript
const friendObj = atom({ name: "Shahin", online: false });
const cities = atom(["Shiraz", "Tehran", "Kerman"]);
const nestedObj = atom({ friend1: { name: "Korosh", age: 20 } });
```

# Example Lesson1 :

### in this example we write a very small app with jotai so with Click in “Click for increased ” Button add 1 count to counter variable and more ….

```javascript
import { atom, useAtom } from "jotai";

const counter = atom(0);

export default function ExLesson1() {
  const [count, setCounter] = useAtom(counter);
  const setCountHandler = () => setCounter((count) => (count += 1));
  return (
    <div>
      <button onClick={setCountHandler}>Click for Increased</button>
      <p>{count}</p>
    </div>
  );
}
```

### As we learned in the above material, we made a number type variable using atoms and stored it inside a variable, and using useAtom, which has a structure similar to useState in React, we were able to update or use it.

# Lesson 2

### Persisting state value. In this lesson, we will take a look at how we can persist the state value to (localStorage) with jotai (atoms). Persisting state to localStorage can be challenging. You might want to persist the user's preferences or data for their next session.

### Jotai (atomWithStorage) is a special kind of atom that automatically syncs the value provided to it with (localstorage) or sessionStorage, and picks the value upon the first load automatically. It's available in the jotai/utils module. To persist our theme atom simply create it with the atomWithStorage atom.

### Note: In first Parameter we pass keyword for toggle and second Parameter we pass that status (true/false)

```javascript
const theme = atomWithStorage("dark", false);
```

# Example Lesson 2 :

### In this Example we have a Toggler button for change new Theme in app , So Click that button and to next Step we Refresh page and Theme changed and not be set to default theme . this is Amazing

```javascript
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const theme = atomWithStorage("dark", false);

export default function ExLesson2() {
  const [Theme, setTheme] = useAtom(theme);
  const handleThemeClick = () => setTheme(!Theme);
  return (
    <div className={Theme ? "dark" : "light"}>
      <h1>This is a theme switcher</h1>
      <button onClick={handleThemeClick}>{Theme ? "DARK" : "LIGHT"}</button>
    </div>
  );
}
```

# Lesson 3 :

## Read Only atoms:

### Readonly atoms are used to read the value of the other atoms. You can't set or change their value directly because these atoms rely on their parent atoms.

```javascript
const textAtom = atom("readonly");
const uppercase = atom((get) => get(textAtom).toUpperCase());
```

### you can with (get) method get a value of atom but not available method for set value on that atom its call (Read Only Atoms)

```javascript
const firstName = atom("Amir");
const lastName = atom("Jamshidi");
const fullName = atom((get) => get(firstName) + " " + get(lastName));
```

### you can get one or two and more values of atoms and use it same Example above.

## Example Lesson 3:

```javascript
import { atom, useAtom } from "jotai";

const text = atom("Ow-mahan-wO");
const Uppercase = atom((get) => get(text).toUpperCase());

export default function ExLesson3() {
  const [lowercaseText, setLowercaseText] = useAtom(text);
  const [uppercaseText] = useAtom(Uppercase);
  const handleChange = (e) => setLowercaseText(e.target.value);
  return (
    <div className="app">
      <input value={lowercaseText} onChange={handleChange} />
      <h1>{uppercaseText}</h1>
    </div>
  );
}
```
###   
![Ex lesson 3 output](./images/outputExLesson3.PNG "output")

## Awsome feature:

### You can do more than just simply read the value of other atoms like (filter) and sorted out them or (map) over the values of the parent atom. And this is the beauty of it, Jotai gracefully lets you create dumb atoms derivated from even more dumb atoms.Here is a example of getting the list of all online and offline friends:

```javascript
const friendsStatus = atom([
  { name: "Reza", online: false },
  { name: "Shayan", online: true },
  { name: "Mahan", online: false },
]);

const onlineFriends = atom((get) =>
  get(friendsStatus).filter((item) => item.online)
);
const offlineFriends = atom((get) =>
  get(friendsStatus).filter((item) => !item.online)
);
```

### it is greate and easy!!!

# Lesson 4:
### Read Write atoms :
### These atoms are the combination of both read-only and write-only atoms.

```javascript
const count = atom(1);
export const readWriteAtom = atom((get) => get(count),
(get, set) => {
    set(count, get(count) + 1);
  },
);
```
### The first parameter is for reading and the second is for modifying the atom value. Since the readWriteAtom is capable to read and set the original atom value, so we can only export readWriteAtom atom and can hide the original atom in a smaller scope.

## Example Lesson 4:

```javascript
import { atom, useAtom } from 'jotai';

const counter = atom(1);
export default function ExLesson4() {
  
 const readWriteAtom = atom((get) => get(counter),
(get, set) => {
    set(counter, get(counter) + 1);
  },
);
  const [count,setCount]=useAtom(readWriteAtom)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={setCount}>Click</button>
    </div>
  )
}
```
### In this example we have a button and h1 element that show count and when clicked button, count increased 1 and update element value:

![Ex lesson 4 output](./images/outputExLesson4.PNG "output")

# Lesson 5

### Atom Creators:
### An atom creator means simply a function that returns an atom or a set of atoms. It's just a function and it's not some features that the library provides, but it's an important pattern to make a fairly complex use case. This avoids the boilerplate of having to set up another atom just to update the state of the first.

```javascript
const createCountIncreasedAtoms = (initialValue) => {
  const InitialAtom = atom(initialValue)
  const ValueAtom = atom((get) => get(InitialAtom))
  const IncreamentAtom = atom(null, (get, set) => set(InitialAtom, (n) => n + 1))
  return [ValueAtom, IncreamentAtom]
}

const [TestAtom1, TestIncAtom1] = createCountIncreasedAtoms(0)
const [TestAtom2, TestIncAtom2] = createCountIncreasedAtoms(0)
```
### Consider this case that use it of write atoms that we learned in previous Lessons: 

```javascript
const TestAtom1 = atom(0);
const TestAtom2 = atom(0);
const TestincAtom1 = atom(null, (get, set) => {
   set(TestAtom1, n => n + 1);
});
const TestincAtom2 = atom(null, (get, set) => {
   set(TestAtom2, n => n + 1);
});
```
### Although you can attach the suitable actions to the setter of the respective atom, but this also increases boilerplate code when there are more atoms in your code.
## So simply replace this with the atom creators function.
### how do we do this ?! like example below.

# Example Lesson5 :

```javascript
import { atom, useAtom } from 'jotai'

const createCountIncreasedAtoms = (initialValue) => {
  const InitialAtom = atom(initialValue)
  const ValueAtom = atom((get) => get(InitialAtom))
  const IncreamentAtom = atom(null, (get, set) => set(InitialAtom, (n) => n + 1))
  return [ValueAtom, IncreamentAtom]
}

const [TestAtom1, TestIncAtom1] = createCountIncreasedAtoms (0)
const [TestAtom2, TestIncAtom2] = createCountIncreasedAtoms (0)

function ExLesson5() {
  const [TestCount1] = useAtom(TestAtom1)
  const [, incTest1] = useAtom(TestIncAtom1)
  const [TestCount2] = useAtom(TestAtom2)
  const [, incTest2] = useAtom(TestIncAtom2)

  const onClick1 = () => {
    incTest1()
  }
  const onClick2 = () => {
    incTest2()
  }

  return (
    <>
      <div>
        <span>{TestCount1}</span>
        <button onClick={onClick1}>incTest1</button>
      </div>
      <div>
        <span>{TestCount2}</span>
        <button onClick={onClick2}>incTest2</button>
      </div>
    </>
  )
}
```

![Ex lesson 5 output](./images/outputExLesson5.PNG "output")

### in this example we have two atoms that should be update similar each other .
### we write a atom creator and handle proccess in that and make it reusable , with pass parameter to custome value in atom creator function .

# Lesson 6 
## Async Read Atoms:
## Using async atoms, you gain access to real-world data while still managing them directly from your atoms and with incredible ease.
## We separate async atoms in two main categories , Async read atoms and Async write atoms.
## Like example below :

```javascript
const counter = atom(0);
const asyncAtom = atom(async (get) => get(counter) * 5);
```
## Jotai is inherently leveraging Suspense to handle asynchronous flows.

```javascript
<Suspense fallback={<span>loading...</span>}>
      <AsyncComponent />
</Suspense>
```
### But there is a more jotai way of doing this with the loadable api present in jotai/utils. By simply wrapping the atom in loadable util and it returns the value with one of the three states: loading, hasData and hasError.

```javascript
import { loadable } from "jotai/utils"
import { atom, useAtom } from 'jotai'

const countAtom = atom(0);
const asyncAtom = atom(async (get) => get(countAtom));
const loadableAtom = loadable(asyncAtom)
const AsyncComponent = () => {
  const [value] = useAtom(loadableAtom)
  if (value.state === 'hasError') return <div>{value.error}</div>
  if (value.state === 'loading') {
    return <div>Loading...</div>
  }
  return <div>Value: {value.data}</div>
```

# Example Lessson 6 :

```javascript
import { atom, useAtom } from 'jotai';
import { Suspense } from 'react'

const counter = atom(1);
const asyncAtom = atom(async (get) => get(counter) * 5);

function AsyncComponent() {
  const [asyncCount] = useAtom(asyncAtom);
  return (
    <div className="app">
      <h1>{asyncCount}</h1>
    </div>
  )
}

export default function ExLesson6() {
   return (
    <Suspense fallback={<span>loading...</span>}>
      <AsyncComponent />
    </Suspense>
  )
}
```
### In example above we have a count atom that read with async and do it count * 5 
### And in suspense we pass a fallback props with value that wana show in loading new value  .

# status:not completed