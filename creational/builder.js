class Person {
    setName = name => {
        this.name = name;
        return this;
    }
    setAge = age => {
        this.age = age;
        return this;
    }
}
console.log(new Person().setAge(12).setName("Mohamed"));