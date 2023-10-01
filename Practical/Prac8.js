// Create a JavaScript module that fetches data from an API using the fetch()
// function and exports the retrieved data.
// Create an async function getUsers(names), that gets an array of GitHub logins,
// fetches the users from GitHub and returns an array of GitHub users.
// The GitHub url with user information for the given USERNAME is:
// https://api.github.com/users/USERNAME.
// There’s a test example in the sandbox.
// Important details:
//  There should be one fetch request per user.
//  Requests shouldn’t wait for each other. So that the data arrives as soon
// as possible.
//  If any request fails, or if there’s no such user, the function should return
// null in the resulting array.

async function getUsers(names) {
    const promises = names.map(async (name) => {
        const response = await fetch(`https://api.github.com/users/${name}`);
        if (response.ok) {
            return response.json();
        }
        return null;
    });

    const users = await Promise.all(promises);
    return users;
}

const names = ['jodhanikrunal', 'Raj-9747', 'HARSHDUDHAT07'];

getUsers(names)
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.error(error);
    });