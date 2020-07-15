const Conf = require('conf');

class Hadron {
    constructor(opts) {
        this._conf = new Conf(Object.assign({}, {
            accessPropertiesByDotNotation: true,
            clearInvalidConfig: false,
            watch: true,
        }, opts));
    }

    /**
     * Return the number of items in the configuration.
     *
     * @returns {number}
     */
    get length() {
        return this._conf.size;
    }

    /**
     * Delete {key} from the configuration.
     *
     * @param key
     * @returns {Hadron}
     */
    delete(key) {
        this._conf.delete(key);
        return this;
    }

    /**
     * Return the value of {key}, or {def} if it does not exist.
     *
     * @param key
     * @param def
     * @returns {*}
     */
    get(key, def) {
        return this._conf.get(key, def);
    }

    /**
     * Return whether or not {key} exists in the configuration.
     *
     * @param key
     * @returns {boolean}
     */
    has(key) {
        return this._conf.has(key)
    }

    /**
     * Set {key} to {value}.
     *
     * @param key
     * @param value
     * @returns {Hadron}
     */
    set(key, value) {
        this._conf.set(key, value);
        return this;
    }

    /**
     * Watch for changes to {key} and call {callback} when a change is made.
     *
     * @param key
     * @param callback (newValue, oldValue)
     * @returns {Hadron}
     */
    watch(key, callback) {
        this._conf.onDidChange(key, callback);
        return this;
    }

    /**
     * Watch for any changes and call {callback} when a change is made.
     *
     * @param callback (newValue, oldValue)
     * @returns {Hadron}
     */
    watchAll(callback) {
        this._conf.onDidAnyChange(callback);
        return this;
    }
}

module.exports = Hadron;
