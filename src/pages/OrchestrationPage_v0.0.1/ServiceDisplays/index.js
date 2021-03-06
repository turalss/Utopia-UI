// Libraries
import React from "react";

// Components
import AirplanesDashboard from './AirplanesDashboard';
import AirportsDashboard from './AirportsDashboard';
import BookingsDashboard from './BookingsDashboard';
import FlightsDashboard from './FlightsDashboard';
import RoutesDashboard from './RoutesDashboard';
import UsersDashboard from './UsersDashboard';
import ErrorMessage from '../../../components/ErrorMessage_v0.0.1';

const ServicesDisplay = (props) => {

  const { reduce, state } = props;
  const { sizing } = state;

  const buttonSize = sizing.button || 30;
  const services = state.orchestration
  ? state.orchestration.services
  : {list: [], status: "UNKNOWN"};

  return (
    <div>

      {/* Loading Spinner */}
      {services.status === "PENDING" && 
        <div
          className="spinner-border color-cream"
          style={{
            height: buttonSize * 0.5 + "px",
            width: buttonSize * 0.5 + "px",
          }}
        />
      }

      {/* No Active Services Error */}
      {services.status === "REGISTERED" && services.list.length < 1 && 
        <div 
          className="color-red bg-smoke border-radius-xsm border-shadow flex-row"
          style={{
            height: "50px",
            width: "50%"
          }}
        >
          <ErrorMessage 
            message={"No Active Services!"}
          />
        </div>
      }

      {/* Active Services Display */}
      {services.status === "REGISTERED" && services.list.length > 0 && 
        <div className="flex-column-around">
          <AirplanesDashboard 
            isActive={services.list.includes("airplane-service")}
            reduce={reduce}
            state={state}
          />

          <AirportsDashboard 
            isActive={services.list.includes("airport-service")}
            reduce={reduce}
            state={state}
          />

          <BookingsDashboard 
            isActive={services.list.includes("booking-service")}
            reduce={reduce}
            state={state}
          />

          <FlightsDashboard 
            isActive={services.list.includes("flight-service")}
            reduce={reduce}
            state={state}
          />

          <RoutesDashboard 
            isActive={services.list.includes("flight-service")}
            reduce={reduce}
            state={state}
          />

          <UsersDashboard 
            isActive={services.list.includes("flight-service")}
            reduce={reduce}
            state={state}
          />
        </div>
      }
    </div>
  );
};
export default ServicesDisplay;