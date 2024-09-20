const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB Calls,cryptography,network calls
  setTimeout(function () {
    console.log("Async task 1 is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Priyanshu", email: "priyanshusharma6666@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (error) {
      resolve({
        username: "Priyanshu",
        password: "123",
      });
    } else {
      reject("ERROR: something went wrong!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username; //returns to next then
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either rejected or resolved");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        username: "javascript",
        password: "123",
      });
    } else {
      reject("ERROR: JS went wrong!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}

getAllUsers();

fetch("https://api.github.com/users/Priyanshu-web-tech")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("E:", error);
  })
  .finally(() => {
    console.log("Promise is resolved or rejected");
  });
