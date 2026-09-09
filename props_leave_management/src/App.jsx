function LeaveCard({ name, leaveType, days, status }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Leave Type: {leaveType}</p>
      <p>Days: {days}</p>
      <p>Status: {status}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Leave Management System</h1>

      <LeaveCard
        name="Pratik"
        leaveType="Casual Leave"
        days={2}
        status="Approved"
      />

      <LeaveCard
        name="Rahul"
        leaveType="Sick Leave"
        days={3}
        status="Pending"
      />

      <LeaveCard
        name="Aman"
        leaveType="Earned Leave"
        days={5}
        status="Rejected"
      />
    </div>
  );
}

export default App;