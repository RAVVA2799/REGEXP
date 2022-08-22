const path = 'posts/10';
const pattern = /\w+\/(\d+)/;

const match = path.match(pattern);
console.log(match);
