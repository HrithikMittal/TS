// Generic Classes
class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Adhikansh');
textStorage.addItem('Praveen');
textStorage.addItem('Ashish');

console.log(textStorage.getItems);



// Generic utility function
interface CourseGoal {
  title: string;
  description: string;
  completionUntil: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completionUntil = date;
  return courseGoal as CourseGoal;
}
//  Add the propery line by line


const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Mamu');
// names.pop();



// Difference Between when to use the Generic Types vc Union Types
// Generic Type tell you to use the specific value any value to all the data but Union tell you use any value 