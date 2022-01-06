import helloworld from './helloworld'
import imgSrc from './assets/ic_menu_logo_nav.png'
import logoSvg from './assets/touxiang.svg'
import txtContent from './assets/test.txt'
import jpegimg from './assets/testjpg.jpeg'
import './style.css'
import './style.less'
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
document.body.appendChild(txt)

const img3 = document.createElement('img')
img3.src = jpegimg
document.body.appendChild(img3)

document.body.classList.add('hello')