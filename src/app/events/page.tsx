import Desk from './desk/Desk';

export default function Events() {
  return (
    <div>
      <h1>Events Calendar</h1>

      <div className="page-wrapper">
        <Desk />

        <div className="card">
          <div className="card-title">Comming Soon</div>
          <div className="card-body">
            <ul>
              <li>Charity Saturday 12/12 14:00</li>
              <li>After Party 14/12 22:00</li>
            </ul>
          </div>
        </div>

        <div>
          <button>+ Add Event</button>
        </div>
      </div>
    </div>
  );
}
