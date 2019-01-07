const kata=require('./kata');



test('1 to equal null', () => {
    expect(kata.prime(1)).toBe(null);
  });

  test('2 to equal 2', () => {
    expect(kata.prime(2)).toEqual([2]);
  });

  test('3 to equal 3', () => {
    expect(kata.prime(3)).toEqual([3]);
  });

  test('2,2 to equal 4', () => {
    expect(kata.prime(4)).toEqual([2,2]);
  });

  test('2,2,2 to equal 8', () => {
    expect(kata.prime(8)).toEqual([2,2,2]);
  });


  test('3,3 to equal 9', () => {
    expect(kata.prime(9)).toEqual([3,3]);
  });


  test('3,3,3,47 to equal 1269', () => {
    expect(kata.prime(1269)).toEqual([3,3,3,47]);
  });