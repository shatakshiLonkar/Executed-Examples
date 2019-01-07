const add=require('./matadd');
const math=require('mathjs')



const matrixA = math.matrix([[0, 1], [2, 3], [4, -5]]);
const matrixB = math.matrix([[1, -1], [-2, 4], [-7, 4]]);

describe('Addition', () => {
test('Matrix A is undefined and  return Matrix b', () => {
    expect(add.add(undefined,matrixB)).toBe(matrixB);
 });

 test('Matrix B is undefined and  return Matrix a', () => {
    expect(add.add(matrixA,undefined)).toBe(matrixA);
 });

 test('Matrix A and Matrix B is undefined and  return undefined', () => {
    expect(add.add(undefined,undefined)).toBe(undefined);
 });

 test('Matrix A and Matrix B  and  return Addition', () => {
    expect(add.add(matrixA,matrixB)).toEqual([[1, 0 ], [ 0, 7 ], [ -3, -1 ]]);
 });
});


describe('Substraction', () => {
    test('Matrix A is undefined and  return Matrix b', () => {
        expect(add.substract(undefined,matrixB)).toBe(matrixB);
     });
    
     test('Matrix B is undefined and  return Matrix a', () => {
        expect(add.substract(matrixA,undefined)).toBe(matrixA);
     });
    
     test('Matrix A and Matrix B is undefined and  return undefined', () => {
        expect(add.substract(undefined,undefined)).toBe(undefined);
     });
    
     test('Matrix A and Matrix B  and  return Addition', () => {
        expect(add.substract(matrixA,matrixB)).toEqual([ [ -1, 2 ], [ 4, -1 ], [ 11, -9 ] ] );
     });
    });
    
    
    const matrixK = math.matrix([[0, 1], [2, 3], [4, 5]]);
const matrixL = math.matrix([[2, 4], [6, 2]]);

describe('Multiplication', () => {
   test('Matrix A is undefined and  return undefined', () => {
       expect(add.multiply(undefined,matrixB)).toBe(undefined);
    });
   
    test('Matrix B is undefined and  return Matrix a', () => {
       expect(add.multiply(matrixA,undefined)).toBe(undefined);
    });
   
    test('Matrix A and Matrix B is undefined and  return undefined', () => {
       expect(add.multiply(undefined,undefined)).toBe(undefined);
    });
   
    test('Matrix A and Matrix B  and  return Multiplicaton', () => {
       expect(add.multiply(matrixK,matrixL)).toEqual([ [ 6, 2 ], [ 22, 14 ], [ 38, 26 ] ]);
    });
   });

   describe('Transpose', () => {
      test('Matrix A is undefined and  return undefined', () => {
          expect(add.transpose(undefined)).toBe(undefined);
       });

       test('Matrix A then return transpose', () => {
         expect(add.transpose(matrixL)).toEqual([ [ 2, 6 ], [ 4, 2] ]);
      });
     });
      