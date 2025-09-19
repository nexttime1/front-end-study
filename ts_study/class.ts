
class Man {
    private mName: string
    protected mAge: number

    constructor(name: string, age: number) {
        this.mName = name
        this.mAge = age
    }
    getMName(){
        console.log(this.mName) // private  只能在当前类中访问
    }
}

class People extends Man {

    name: string
    private age: number

    constructor(name: string, age: number = 18) {
        super(name, age) // 调用父类的构造方法
        this.name = name
        this.age = age
    }

    getName() {
        console.log(this.mAge) // protected 类的子类可以访问
        console.log(this.name)
    }
}

let p: People = new People("枫枫")
console.log(p.name)
// console.log(p.age) // 不能在外面访问





class PeopleNew {

    static ClassName:string = "类名"
    nickName: string

    constructor(nickName: string) {
        this.nickName = nickName
    }

    static getName() {
        console.log(PeopleNew.ClassName)
    }
}

let p2 : PeopleNew = new PeopleNew("枫枫")
PeopleNew.getName()


interface PersonType {
    name: string
    age: number
    getName():string
}

class Person implements PersonType{
    name: string
    age: number
    
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    
    getName(): string {
        return this.name
    }
}

let p1 = new Person("枫枫", 12)