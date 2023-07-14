// 1
const a = document.createElement('a')
const text = document.createTextNode('text')
const div = document.getElementById('block')

a.append(text)
div.append(a)

// 2
// const a2 = document.createElement('a')
// const text2 = document.createTextNode('text')
// 
// a2.append(text2)
// div.insertBefore(a, a2)

// 3
const p1 = document.getElementById('p1')
const block2 = document.getElementById('block2')
p1.remove()

// 4
const p2 = document.getElementById('p2')
const block3 = document.getElementById('block3')

const newChild = document.createElement('i')
const textfori = document.createTextNode('Hello World')
newChild.append(textfori)

block3.replaceChild(newChild, p2)


// p2.innerHTML = '<i>Hello World</i>'

// 5
// const pyatoe = document.querySelectorAll('.block')

// 6
// пример:
// const p = document.querySelectorAll('p')
// p[0]

// 7
// primer.length
// 8
// HTMLCollection,только узлы html 
// а NodeList все типы