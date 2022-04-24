// import { Subject } from 'rxjs'
// در این الگو یک کلاس تغییرات خودش رو به گوش بقیه کلاس ها می رسونه
// به شیوه پوش و شاید بهتنری نمونه از این الگو رو بشه فایر بیس عنوان کرد 
let { Subject } = require('rxjs');
let sub = new Subject()

sub1 = sub.subscribe(info => console.log("subscriber number(1):", info))
sub2 = sub.subscribe(info => console.log("subscriber number(2):", info))
sub3 = sub.subscribe(info => console.log("subscriber number(3):", info))


sub.next("hello world");
sub.next("I am sending information to all my subscribers");