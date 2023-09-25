// Define an array of names
const names = ["jamila", "ahmed", "jihan", "hanane", "malika"];

// Loop through the array
for (let i = 0; i < names.length; i++) {
  // Get the current name
  const name = names[i];

  // Check if the name starts with 'J' or 'j'
  if (name.charAt(0).toLowerCase() === 'j') {
    console.log(`Goodbye ${name}`);
  } else
   {
    console.log(`Hello ${name}`);
  }
}
