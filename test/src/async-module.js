function getComponent () {
  // import返回的是一个Promise
  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div')
    element.innerHTML = _.join(['hello', 'world'], ' ')
    return element
  })
}

getComponent().then(element => {
  document.body.appendChild(element)
})