
/**
 *  database driver
 *  project configuration
 *
 * @class Setting
 */
class Setting {
    static instance;
    count = 0;
    static getSetting() {
        if (!this.instance)
            this.instance = new Setting()
        return this.instance;
    }
    plus() {
        this.count++;
    }
}
let setting = Setting.getSetting()
let setting2 = Setting.getSetting()
setting.plus();
setting2.plus();
console.log(setting.count); //should be 1 in new object but in singleton is 2