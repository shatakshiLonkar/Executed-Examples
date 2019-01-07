const parse=require('./parse');

//console.log(parse.a);


test('number undefined', () => {
    expect(parse.parse(undefined)).toBe(undefined);
  });

  test('number defined', () => {
    expect(parse.parse(745)).toEqual([7,4,5]);
  })
  test('number simgle digit', () => {
      expect(parse.parse(4)).toEqual([4]);
    })