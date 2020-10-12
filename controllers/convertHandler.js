/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {

    this.units = {
        gal: {
            name: 'gallons',
            target: {
                unit: 'l',
                factor: 3.78541
            }
        },
        lbs: {
            name: 'pounds',
            target: {
                unit: 'kg',
                factor: 0.453592
            }
        },
        mi: {
            name: 'miles',
            target: {
                unit: 'km',
                factor: 1.60934
            }
        },
        l: {
            name: 'liters',
            target: {
                unit: 'gal',
                factor: 1 / 3.78541
            }
        },
        kg: {
            name: 'kilograms',
            target: {
                unit: 'lbs',
                factor: 1 / 0.453592
            }
        },
        km: {
            name: 'kilometers',
            target: {
                unit: 'mi',
                factor: 1 / 1.60934
            }
        }
    };

    let reNrOk = /((^\d+(\.\d+)?)$)|((^\d+(\.\d+)\/\d+)$)|((^\d+\/\d+)$)/;
    let testSplit = /[a-zA-Z]+/

    this.getNum = function(input) {
        let num = input.split(testSplit);
        if (num.length == 2 && Number(num[0][0])) {
            num = num[0];
            if (num.match(reNrOk)) {
                if (num.includes("/")) {
                    return num.split('/').reduce((a, b) => a / b);
                }
                return parseFloat(num, 10);
            } else {
                return null;
            }
        } else {
            return 1;
        }
    }

    // this.getUnit = function(input){
    //     let inputUnit = input.toLowerCase().match(testSplit);
    //     if(inputUnit){
    //         return Object.keys(this.units).includes(inputUnit[0]) ? inputUnit[0] : null;
    //     } else {
    //         return null;
    //     }
    // };

    this.getUnit = function(input){
        let inputUnit = input.match(testSplit);
        if(inputUnit){
            console.log("inputUnit(88) ", inputUnit[0])
            return Object.keys(this.units).includes(inputUnit[0].toLowerCase()) ? inputUnit[0] : null;
        } else {
            return null;
        }
    };

    this.getReturnUnit = function(initUnit) {
        return this.units[initUnit.toLowerCase()].target.unit;
    }

    this.spellOutUnit = function(unit) {
        return this.units[unit.toLowerCase()].name;
    };

    this.convert = function(initNum, initUnit) {
        return initNum * this.units[initUnit.toLowerCase()].target.factor;
    };

    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
        return {
            initNum,
            initUnit,
            returnNum,
            returnUnit,
            string: initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum.toFixed(5) + ' ' + this.spellOutUnit(returnUnit)
        };
    }
}

module.exports = ConvertHandler;
