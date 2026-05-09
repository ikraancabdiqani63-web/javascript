function placeHolder(name) {
  return name || "mohamed";
}
function greeting() {
  if (!name) {
    name = placeHolder(name);
    return `Hello ${name}`;
  }
  return `Hello ${name}`;
}

function sayAsalamuAlaikum() {
  console.log(`Assalamu Alaikum ${name}`);
  return `Assalamu Alaikum ${name}`;
}

export { placeHolder, greeting, sayAsalamuAlaikum };
