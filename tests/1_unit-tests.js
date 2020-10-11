/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('Function convertHandler.getNum(input)', function() {

    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });

    test('Decimal Input', function(done) {
      var input = '32.55L';
      assert.equal(convertHandler.getNum(input),32.55);
      done();
    });

    test('Fractional Input', function(done) {
      var input = '3/4L';
      assert.equal(convertHandler.getNum(input),0.75);
      done();
    });

    test('Fractional Input w/ Decimal', function(done) {
      var input = '15.50/2L';
      assert.equal(convertHandler.getNum(input),7.75);
      done();
    });

    test('Invalid Input (double fraction)', function(done) {
        var input = '15.50/2/4L';
        assert.equal(convertHandler.getNum(input), null);
        done();
    });

    test('No Numerical Input', function(done) {
        var input = 'L'
        assert.equal(convertHandler.getNum(input),1);
        done();
    });

  });

  suite('Function convertHandler.getUnit(input)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase())
      });
      done();
    });

    test('Unknown Unit Input', function(done) {
        var i = 'Tons';
        assert.equal(convertHandler.getUnit(i), null);
        done();
    });

  });

  suite('Function convertHandler.getReturnUnit(initUnit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });

  });

  suite('Function convertHandler.spellOutUnit(unit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
        var input = ['gal','l','mi','km','lbs','kg'];
        var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
        input.forEach(function(ele, i) {
          assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
        });
      done();
    });

  });

  suite('Function convertHandler.convert(num, unit)', function() {

    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

    test('L to Gal', function(done) {
        var input = [5, 'l'];
        var expected = 1.320860884;
        assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1); //0.1 tolerance
        done();
    });

    test('Mi to Km', function(done) {
        var input = [15, 'mi'];
        var expected = 24.1401;
        assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1); //0.1 tolerance
        done();
    });

    test('Km to Mi', function(done) {
        var input = [2, 'km'];
        var expected = 1.242745473;
        assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1); //0.1 tolerance
        done();
    });

    test('Lbs to Kg', function(done) {
        var input = [3, 'lbs'];
        var expected = 1.3605;
        assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1); //0.1 tolerance
        done();
    });

    test('Kg to Lbs', function(done) {
        var input = [1, 'kg'];
        var expected = 2.20462442;
        assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1); //0.1 tolerance
        done();
    });

  });

});
