import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomeView } from 'views/HomeView';
import { EventsView } from 'views/EventsView';
import { EventsSubView } from 'views/EventsSubViev';
import { EventDetails } from 'views/EventDetails';
import { NotFoundView } from 'views/NotFoundView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="events" element={<EventsView />}>
          <Route path=":eventsId" element={<EventsSubView />} />
        </Route>
        <Route path="events/:eventsId/details" element={<EventDetails />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
