import {add,remove} from './crud';

describe( 'Testing add and remove function',() =>{

    test("Test for adding task and chking the value of task", ()=>{
      //Arrange
      let arr = [];
      let taskString = "test";

      //Act
      add(arr,taskString);

      //Assert
      expect(arr[0].description).toBe('test');
    });

    test("Test for adding task and check length", ()=>{
      //Arrange
      let arr = [];
      let taskString = "test";

      //Act
      add(arr,taskString);

      //Assert
      expect(arr).toHaveLength(1);
    });

    test("Test for adding empty task and check length", ()=>{
      //Arrange
      let arr = [];
      let taskString = "";

      //Act
      add(arr,taskString);

      //Assert
      expect(arr).toHaveLength(0);
    });

    test("test for removing a task",()=>{
      //Arrange
      let arr = [];
      let taskString = "test";

      //Act
      remove(0,arr);

      //Assert
      expect(arr).toHaveLength(0);
    });
});
