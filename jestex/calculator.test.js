const calculator=require('./calculator');

//console.log(calculator.add(3,2));

//console.log(calculator.sub(3,2));

describe('Addition', () => {
test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  //test('sub 2-1 to equal 1', () => {
    //xpect(calculator.sub(2, 1)).toBe(1);
  //});

  test('Add 2,undefined to equal 2', () => {
    expect(calculator.add(2, undefined)).toBe(2);
  });

  test('Add undefined,2 to equal 2', () => {
    expect(calculator.add(undefined,2)).toBe(2);
  });

  test('Add -3,2 to equal -1', () => {
    expect(calculator.add(-3,2)).toBe(-1);
  });

  test('Add 3,-2 to equal 1', () => {
    expect(calculator.add(3,-2)).toBe(1);
  });

  test('Add undefined, undefined to equal NaN', () => {
    expect(calculator.add(undefined, undefined)).toBe(undefined);
  });
});


describe('substraction', () => {
  test('subs 2 - 1 to equal 1', () => {
      expect(calculator.sub(2, 1)).toBe(1);
    });



  test('sub 2,undefined to equal 2', () => {
    expect(calculator.sub(2, undefined)).toBe(2);
  });

  test('sub undefined,2 to equal 2', () => {
    expect(calculator.sub(undefined,2)).toBe(-2);
  });

  test('sub -3,2 to equal -5', () => {
    expect(calculator.sub(-3,2)).toBe(-5);
  });

  test('sub 3,-2 to equal 5', () => {
    expect(calculator.sub(3,-2)).toBe(5);
  });
  test('sub undefined, undefined to equal NaN', () => {
    expect(calculator.sub(undefined, undefined)).toBe(undefined);
  });

  test('sub 2, 3 to equal -1', () => {
    expect(calculator.sub(2, 3)).toBe(-1);
  });
});

  describe('Multiplication', () => {
    test('mult 2 * 1 to equal 2', () => {
        expect(calculator.mult(2, 1)).toBe(2);
      });
  
      test('mult -2 * 1 to equal -2', () => {
        expect(calculator.mult(-2, 1)).toBe(-2);
      });
      test('mult 2,undefined to equal undefined', () => {
        expect(calculator.mult(2, undefined)).toBe(undefined);
      });
      test('mult undefined,2 to equal undefined', () => {
        expect(calculator.mult(undefined,2)).toBe(undefined);
      });
      test('mult undefined, undefined to equal NaN', () => {
        expect(calculator.mult(undefined, undefined)).toBe(undefined);
      });
});

  describe('Division', () => {
    test('div 2/1 to equal 2', () => {
        expect(calculator.div(2, 1)).toBe(2);
      });


    test('div -6/2 to equal -3', () => {
        expect(calculator.div(-6, 2)).toBe(-3);
      });

    test('div 6/-2 to equal -3', () => {
        expect(calculator.div(-6, 2)).toBe(-3);
      });
    test('div 2,undefined to equal undefined', () => {
        expect(calculator.div(2, undefined)).toBe(undefined);
      });
    test('div undefined,2 to equal undefined', () => {
        expect(calculator.div(undefined,2)).toBe(undefined);
      });
    test('div undefined, undefined to equal NaN', () => {
        expect(calculator.div(undefined, undefined)).toBe(undefined);
      });
    
  
});