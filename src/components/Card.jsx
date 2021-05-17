import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
function Card(props) {
  const ws = useRef(null)
  const [price, setPrice] = useState(props.current_price)
  const [isMousedOver, setMouseOver] = useState(false)

  const handleMouseOver = () => {
    setMouseOver(true)
  }

  const handleMouseOut = () => {
    setMouseOver(false)
  }

  useEffect(() => {
    ws.current = new WebSocket(props.webUrl + props.crypto)
    ws.current.onopen = () => console.log('ws opened')
    ws.current.onclose = () => console.log('ws closed')
    ws.current.onmessage = (e) => {
      const message = JSON.parse(e.data)
      setPrice(message[props.crypto])
    }
    return () => {
      ws.current.close()
    }
  }, [props.webUrl, props.crypto])
  return (
    <Link to={`/coin/${props.crypto}`} style={{ color: 'black' }}>
      <div
        className="note"
        style={{ backgroundColor: isMousedOver ? '#F0F0F0' : 'white' }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src={props.image} alt="" width="40" height="40" />
        <h1>{props.crypto.toUpperCase()}</h1>
        <p>{'$ ' + price}</p>
        <span
          className={
            props.percentChange < 0
              ? "text-danger mr-2"
              : "text-success mr-2"
          }  
        >
          {" "}
          {props.percentChange < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1"></i>
          ) : (
            <i className="fas fa-sort-up align-middle mr-1"></i>
          )}
          {(props.percentChange.toFixed(2)) + " %"}
        </span>
      </div>
    </Link>
  )
}

export default Card
