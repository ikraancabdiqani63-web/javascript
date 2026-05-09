function greetUser(name) {
    if (!name) {
        throw new Error("please enter your name");
    }
    return `Hello, ${name}!`;
}
function welcomeMessage(name) {
    return `Welcome lovely, ${name}!`;
}
export { greetUser,welcomeMessage };