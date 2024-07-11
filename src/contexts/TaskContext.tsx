import { createContext, ReactNode, useState } from 'react';

interface TaskContextType {
  data: TaskType[];
  setData: (data: TaskType[]) => void;
}
export const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

function TaskProvider({ children }: TaskProviderProps) {
  const [data, setData] = useState<TaskType[]>([]);
  return <TaskContext.Provider value={{ data, setData }}>{children}</TaskContext.Provider>;
}

export default TaskProvider;
