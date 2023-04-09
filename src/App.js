import './App.css';
import tasks from './data.js';
import moment from 'moment';

function formatDate(date) {
  return date ? moment(date).format('MM/DD/YYYY') : '';
}

function App() {    
  const taskItems = tasks.map((task) => (
    <li key={task.id}>
      <input type="checkbox" checked={task.done} />
      {task.firstName} {task.lastName}, Active Date: {formatDate(task.activeDate)}, Retire Date: {formatDate(task.retireDate)}
    </li>
  ));
  return (
    <>
      <ul>{taskItems}</ul>
    </>
  );
}

export default App;
