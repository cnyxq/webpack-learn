import helloworld from './helloworld'
import imgSrc from './assets/ic_menu_logo_nav.png'
import logoSvg from './assets/touxiang.svg'
import txtContent from './assets/test.txt'
import jpegimg from './assets/testjpg.jpeg'
import './style.css'
import './body.css'
// import './style.less'
import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json from './assets/data.json5'

console.log(toml.title)
console.log(toml.owner.name)
console.log(yaml.title)
console.log(yaml.owner.name)
console.log(json.title)
console.log(json.owner.name)

import Data from './assets/data.xml'
import Notes from './assets/data.csv'
console.log(Data)
console.log(Notes)
helloworld()

const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)


const img2 = document.createElement('img')
img2.src = logoSvg
document.body.appendChild(img2)

const txt = document.createElement('div')
txt.style.cssText = 'width: 200px;height: 200px;background: yellow;'
txt.textContent = txtContent
txt.classList.add('img-class')
document.body.appendChild(txt)

const img3 = document.createElement('img')
img3.src = jpegimg
document.body.appendChild(img3)

document.body.classList.add('hello')

const span = document.createElement('span')
span.classList.add('icon')
span.innerHTML = '&#xe668;'
document.body.appendChild(span)


import _ from 'lodash'
console.log(_.join([' Index', 'module', 'loaded!'], ''))

import './async-module.js'

const button = document.createElement('button')
button.textContent = '点我加载'
button.addEventListener('click', function () {
  // /* */ 魔法注释
  // 预获取 prefetch: 当前某些导航下可能需要的资源
  // 预加载 preload 当前导航下可能需要的资源
  import(/*webpackChunkName: 'math', webpackPrefetch: true*/'./math.js').then(({ add }) => {
    console.log(add(4, 6))
  })
})
document.body.appendChild(button)