const Hadron = require('../lib/hadron');

describe('Hadron Test Suite', function () {
    let hadron;

    beforeEach(function () {
        hadron = new Hadron('HadronSpec', {});
        hadron._conf.clear();
    });

    it('should have a length of zero', function () {
        expect(hadron.length).toBe(0);
    });

    it('should return a undefined value', function () {
        expect(hadron.get('foo')).toBe(undefined);
    });

    it('should return a default value', function () {
        expect(hadron.get('foo', 'bar')).toBe('bar');
    });

    it('should set a new value', function () {
        expect(hadron.set('foo', 'bar')).toBe(hadron);
        expect(hadron.get('foo')).toBe('bar');
    });

    it('should return false when config does not have the key', function () {
        expect(hadron.has('foo')).toBe(false);
    });

    it('should return true when config has the key', function () {
        hadron.set('foo', 'bar');
        expect(hadron.has('foo')).toBe(true);
    });

    it('should delete key from configuration store', function () {
        hadron.set('foo', 'bar');
        hadron.delete('foo');
        expect(hadron.has('foo')).toBe(false);
    });

    it('should watch a single key for a change', function () {
        hadron.set('foo', 'bra');
        hadron.watch('foo', () => {
            expect(hadron.get('foo')).toBe('bar');
        })

        hadron.set('foo', 'bar');
    });

    it('should watch a single key for a change', function () {
        hadron.set('foo', 'bra');
        hadron.watchAll((changes) => {
            expect(hadron.get('foo')).toBe('bar');
            expect(Object.keys(changes)).toEqual(['foo']);
            expect(changes.foo).toBe('bar');
        })

        hadron.set('foo', 'bar');
    });
});
