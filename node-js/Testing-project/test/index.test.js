
var index= require("../index");


test('toEqual',()=>
{
    expect(index.add(1,2)).toEqual(3);
});
test('toEqual2',()=>
{
    expect(index.add(0,2)).toEqual(32);
});

