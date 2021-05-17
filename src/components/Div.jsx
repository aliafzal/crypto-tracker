import React from 'react'
function Div({data}) {
  return (
      <div
        className="note_1">
        <div className="bg-white mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Market Cap</span>
              <span>{"$ " + (data.market_cap/1000000000).toFixed(2) + " B"}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Total Supply
              </span>
              <span>{data.total_supply + " Coins"}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Volume(24H)</span>
              <span>{"$ "+ (data.total_volume/1000000000).toFixed(2) + " B"}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">High 24h</span>
              <span>{"$ " + data.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Circulating Supply
              </span>
              <span>{"$ " + (data.circulating_supply/1000000).toFixed(2) + " M"}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">low 24h</span>
              <span>{"$ " + data.low_24h}</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Div
