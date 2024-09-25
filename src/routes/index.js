import { useRoutes } from 'react-router-dom';
// routes
import BMWroutes from './BMWroutes';

export default function ThemeRoutes() {
  return useRoutes([BMWroutes]);
}
