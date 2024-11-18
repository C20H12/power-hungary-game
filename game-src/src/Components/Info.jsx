function Info(props) {
  const { playerStats, co2Limit, days, setDAY_INTERVAL } = props;

  return (
    <div className="info">
      <div className="info-entry money">
        <img src="/ui/money.jpg" alt="Money Icon" className="icon" />
        <span>${playerStats.money}</span>
        <div className="description">Total money available</div>
      </div>
      
      <div className="info-entry time">
        <img src="/ui/time.jpg" alt="days" className="icon" />
        <span>Day: {days}</span>
        <div className="description">Days since the beginning.</div>
      </div>
      
      <div className="info-entry">
        <img src="/ui/ex-mark.jpg" alt="Demand Icon" className="icon" />
        <span>{playerStats.population}</span>
        <span className="unit"></span>
        <div className="description">Current population in your city.</div>
      </div>

      <div className="info-entry">
        <img src="/ui/electric.jpg" alt="Electric Icon" className="icon" />
        <div className="progress-bar">
          <div className="progress" style={{ width: `${playerStats.output / playerStats.demand * 100}%` }}>
            {`${playerStats.output}/${playerStats.demand}`}
          </div>
          <span className="unit">Mw</span>
        </div>
        <div className="description">Current power output from your plants relative to the demand.</div>
      </div>

      <div className="info-entry">
        <img src="/ui/co2.jpg" alt="CO2 Icon" className="icon" />
        <div className="progress-bar">
          <div className="progress" style={{ width: `${playerStats.co2 / co2Limit * 100}%` }}>
            {playerStats.co2}
          </div>
          <span className="unit">m³</span>
        </div>
        <div className="description">Current CO2 emissions.</div>
      </div>

      <div className="info-entry time-ctl">
        <button onClick={() => setDAY_INTERVAL(2)}>Slow</button>
        <button onClick={() => setDAY_INTERVAL(0.5)}>Fast</button>
        <button onClick={() => setDAY_INTERVAL(9999)}>Stop</button>
        <div className="description">Time controls.</div>
      </div>
    </div>
  );
}

export default Info;