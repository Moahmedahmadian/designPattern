class System {
    step1() {
        console.log("step1 completed");
    }
    step2() {
        console.log("step2 completed");
    }
    step3() {
        console.log("step3 completed");
    }
}

/**
 * مشتری نهایی درگیر متدها و پیچیدگی های کلاس اصلی نمی شه و تو این کلاس صرفا با فراخوانی یک متد عملیات مد نظر انجام می شه 
 * بدون اینکه از جزئیات و کلاس های لایه های پایین خبر داشته باشه
 *
 * جی کوئری و متدهای اون نمونه خوبی از این نوع الگو هستن که دستورات پیچیده جاوا اسکریپت رو در یک دستور خلاصه می کنن و در اختیار کاربر قرار می دن
 * @class SystemFacade
 */
class SystemFacade {
    run() {
        let system = new System();
        system.step1();
        system.step2();
        system.step3();
    }
}

new SystemFacade().run()