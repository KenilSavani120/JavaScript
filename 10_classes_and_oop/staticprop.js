class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is  ${this.username}`);
    }

    static createId(){
        return `213`
    }
}

const print = new User("kenil")
// console.log(print.createId())



class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());