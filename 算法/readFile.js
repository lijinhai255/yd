


readFile('package.json', 'utf8', (err, data) => {
    console.log(data);
  });
  // ==========
  const data = await promiseify(readFile)('package.json');
  console.log(data);
  
  function promiseify(){
    // coding
  }