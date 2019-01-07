
const rotation=require('./arrayrotation');

//var arr=[1,2,3,4,5];
//rotation.rotate(arr,0);
//console.log(arr);
    test('rotattion by undefined', () => {
        expect(rotation.rotate(undefined)).toBe(undefined);
     });

     test('rotation by -1', () => {
        expect(rotation.rotate(-1)).toEqual([1,2,3,4,5]);
     });

     test('rotation by 0', () => {
      expect(rotation.rotate(0)).toEqual([1,2,3,4,5]);
      });

      test('rotation by 4', () => {
         expect(rotation.rotate(4)).toEqual([5,1,2,3,4]);
      });

      test('rotation by 6', () => {
            expect(rotation.rotate(6)).toEqual([2,3,4,5,1]);
       });

      
