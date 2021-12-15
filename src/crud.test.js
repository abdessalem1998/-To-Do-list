import {add,remove} from './crud';

describe( 'Testing add and remove function',() =>{
    let arr = [];
    let taskString = "test";

    test("Test for adding task", ()=>{
      add(arr,taskString);
      expect(arr).toHaveLength(1);
      expect(arr[0].description).toBe('test');
    });

    test("test for removing a task",()=>{
      remove(0,arr);
      expect(arr).toHaveLength(0);
    });
}); 