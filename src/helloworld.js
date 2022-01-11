function getString () {
  return new Promise((resolve, reject) => {
    let timer = setTimeout(() => {
      resolve('hello world!')
      clearTimeout(timer)
    }, 2000);
  })
}


async function helloworld () {
  const string = await getString()
  console.log(string)
}

export default helloworld