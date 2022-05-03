console.log('000000000:toto');

function importItem() {
    return new Promise(function (resolve, reject) {
      console.log('0001');
      if (Math.random() > .5) {
        console.log('0002');
        resolve("ok");
      }
      else {
        console.log('0003');
        resolve("not ok");
      }
    });
  }
  
  const promise = importItem();
  promise
    .then(res => {
      console.log('0004' + res);
    })
    .catch(err => {
      console.log('0005' + err);
    })
    .finally(err => {
      console.log('0006' + err);
    });
  