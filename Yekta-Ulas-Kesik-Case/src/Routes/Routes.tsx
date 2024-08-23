import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { DocumentScanner } from '../components/DocumentScanner/DocumentScanner';
import { SignAndStamp } from '../components/SignAndStamp/SignAndStamp';
import { BatchAndScanning } from '../components/BatchAndScanning/BatchAndScanning';
import { AdvancedFilters } from '../components/AdvancedFilters/AdvancedFilter';
import { ExportShare } from '../components/ExportShare/ExportShare';

export const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {path:"document_scanner",element:<DocumentScanner/>},
    {path:"sign_stamp",element:<SignAndStamp/>},
    {path:"batch_scanner",element:<BatchAndScanning/>},
    {path:"advanced_filters",element:<AdvancedFilters/>},
    {path:"export_share",element:<ExportShare/>}
  ]
}]);