let goUpBy = 100;
const spin = ["\r| ", "\r/ ", "\r- ", "\r\\ ", "\r| ", "\r/ ", "\r- ", "\r\\ ", "\r|   "];
for (let r of spin) {
  setTimeout(() => {
    process.stdout.write(r);
  }, goUpBy)
  goUpBy +=200
};