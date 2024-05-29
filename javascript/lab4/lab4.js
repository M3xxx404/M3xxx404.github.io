function showBook(book){return `Name: ${book.title}\nPrice: ${book.price}`}
function isEmpty(obj){return Object.keys(obj).length === 0}
function getSecondsToday(){return (new Date() - new Date().setHours(0, 0, 0, 0))/1000}
function formatDate(date){return String(date.getDate()).padStart(2, '0')+'.'+String(date.getMonth()+1).padStart(2, '0')+'.'+String(date.getFullYear()%100).padStart(2, '0')}

var book1 = {
    title: "Dune",
    pubYear: 1965,
    price: 120,

    show(){return `Name: ${this.title}\nPrice: ${this.price}`}
}


class Book2{
    constructor(){
        this.title = "Fahrenheit 451"
        this.pubYear = 1953
        this.price = 100
    }

    show(){return showBook(this)}
}


let obj = {
	className: 'open menu',
    addClass(cls){
        let classes = this.className.split(" ")
        if (!(classes.includes(cls))){
            classes.push(cls)
            this.className=classes.join(" ")
            return this
        }
        return this
    },

    removeClass(cls){
        let classes = this.className.split(" ")
        if (classes.includes(cls)){
            classes.splice(classes.indexOf(cls), 1)
            this.className=classes.join(" ")
            return this
        }
        return this
    }
}


let dima = { name: "Дима", age: 23 }
let sasha = { name: "Саша", age: 18 }
let vova = { name: "Вова", age: 12 }

var book2 = new Book2()
console.log("№3")
console.log(isEmpty(book1))
console.log(isEmpty(book2))
console.log("№1")
for(i in book1) console.log(i)
for(i in book2) console.log(i)
console.log("№2")
console.log(book1.show())
console.log(book2.show())
console.log("№4")
console.log(obj.addClass('open'))
console.log(obj.removeClass("open"))
console.log("№5")
let people = [ dima , sasha , vova ]
people.sort((a, b) => a.age - b.age)
console.log(people)
console.log("№6")
console.log(getSecondsToday())
console.log("№7")
console.log(formatDate(new Date()))