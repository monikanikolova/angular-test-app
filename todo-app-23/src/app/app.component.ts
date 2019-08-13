import { Component } from '@angular/core';

@Component({
  selector: 'app-two-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoArray = [];
  todo;

  // Add Item
  addTodo(value) {
    if (value !== '') {
      this.todoArray.push(value);
      // console.log(this.todos)
    } else {
      alert('Field required **');
    }
  }

  // Delete Item
  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo === this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }

  // Submit Form
  todoSubmit(value: any) {
    if (value !== '') {
      this.todoArray.push(value.todo);
      // this.todoForm.reset()
    } else {
      alert('Field required **');
    }
  }
}

