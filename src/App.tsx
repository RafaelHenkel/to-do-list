import './App.css';
import DefaultTheme from './config/theme/DefaultTheme';
import TaskProvider from './contexts/TaskContexts';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <TaskProvider>
      <DefaultTheme>
        <AppRoutes />
      </DefaultTheme>
    </TaskProvider>
  );
}

export default App;
