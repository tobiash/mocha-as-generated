describe('ES6 Generator based tests', function () {

    beforeEach(function* (resume) {
        yield process.nextTick(resume());
    });

    it('should work', function* (resume) {
        yield process.nextTick(resume());
    });



});
