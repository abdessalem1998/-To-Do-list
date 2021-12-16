import { add, remove, checkCompleted, update } from './crud';
import { changeStatus } from './extra';

describe('Testing add and remove function', () => {
  test('Test for adding task and chking the value of task', () => {
    // Arrange
    const arr = [];
    const taskString = 'test';

    // Act
    add(arr, taskString);

    // Assert
    expect(arr[0].description).toBe('test');
  });

  test('Test for adding task and check length', () => {
    // Arrange
    const arr = [];
    const taskString = 'test';

    // Act
    add(arr, taskString);

    // Assert
    expect(arr).toHaveLength(1);
  });

  test('Test for adding empty task and check length', () => {
    // Arrange
    const arr = [];
    const taskString = '';

    // Act
    add(arr, taskString);

    // Assert
    expect(arr).toHaveLength(0);
  });

  test('test for removing a task', () => {
    // Arrange
    const arr = [];

    // Act
    remove(0, arr);

    // Assert
    expect(arr).toHaveLength(0);
  });
});

describe('Testing Status and content update', () => {
  test('test "Clear all completed" function case not completed', () => {
    // Arrange
    const task = [{completed:false}] ;

    // Act
    const result = checkCompleted(task);

    // Assert
    expect(result).toBe(true);
  });

  test('test "Clear all completed" function case completed', () => {
    // Arrange
    const task = [{completed:true}] ;

    // Act
    const result = checkCompleted(task);

    // Assert
    expect(result).toBe(true);
  });

  test("test if the toDo task is editable", ()=>{
      //Arrange
      const tasks = [{
          description: 'task 1 description',
          completed: true,
          index: 0,
        }];

        let updateValue = "Change task 1 description";

        //Act
        update(0,updateValue,tasks);

        //Assert
        expect(tasks[0].description).toBe(updateValue);
  });

  test("test changeStatus case true", ()=>{
        //Arrange
        const status = true;

        //Act
        const newStatus = changeStatus(status);

        //Assert
        expect(newStatus).toBe(false);
  });

  test("test changeStatus case false", ()=>{
        //Arrange
        const status = false;

        //Act
        const newStatus = changeStatus(status);

        //Assert
        expect(newStatus).toBe(true);
  });
});
