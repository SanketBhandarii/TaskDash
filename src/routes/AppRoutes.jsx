import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TasksDashboard from '../pages/TaskDashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TasksDashboard />,
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;
export default AppRoutes;
