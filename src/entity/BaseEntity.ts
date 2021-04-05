/**
 * 所有实体父类
 * @author Philip
 */
export default class BaseEntity<T> {
    constructor (entity?: T) {
        if (entity) {
            Object.keys(entity).forEach((key) => {
                if (Object.hasOwnProperty(key)) {
                    this[key] = entity[key];
                }
            });
        }
    }
}
