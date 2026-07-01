import { BrowserRouter } from 'react-router';

import AppRoutes from './routes/AppRoutes.tsx';
import ApolloWrapper from './ApolloWrapper';

function App() {
  return (
    <BrowserRouter>
      <ApolloWrapper>
        <div className="flex flex-col">
          <AppRoutes />
        </div>
      </ApolloWrapper>
    </BrowserRouter>
  );
}

export default App;
