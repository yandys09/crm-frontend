import React from "react";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";

// import { Entry } from "./pages/entry/Entry.page";
// import { Dashboard }  from "./pages/dashboard/Dashboard.page";

//import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketList } from './pages/ticket-list/TicketList.page';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket/> */}
        <TicketList />
      </DefaultLayout>
    </div>
  );
}

export default App;
