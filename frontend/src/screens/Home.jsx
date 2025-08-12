import React, { useEffect, useState } from 'react'
import { api } from '../api'

export default function Home(){
  const [insights, setInsights] = useState([])
  const [portfolio, setPortfolio] = useState({ value: 12450.22, delta: +2.8 })
  useEffect(()=>{
    api('/api/insights').then(setInsights).catch(()=>setInsights([]))
  },[])
  return (
    <div className="grid">
      <div className="card">
        <div className="h2">Total portfolio</div>
        <div className="kpi">
          <div className="amount">€ {portfolio.value.toLocaleString()}</div>
          <div className="badge">{portfolio.delta>0?'+':''}{portfolio.delta}% 24h</div>
        </div>
        <div className="row gap" style={{marginTop:12}}>
          <button className="btn acc">Send</button>
          <button className="btn acc">Receive</button>
          <button className="btn acc">Swap</button>
        </div>
      </div>

      <div className="card">
        <div className="h1">AI Insights</div>
        <div className="list">
          {insights.map((it, i)=>(
            <div key={i} className="tx">
              <div>
                <div style={{fontWeight:600}}>{it.title}</div>
                <div className="small">{it.detail}</div>
              </div>
              <span className="label">{it.tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="h1">Latest transactions</div>
        <div className="list">
          <div className="tx">
            <div>
              <div>Swap 100 USDC → 0.052 ETH (Uniswap)</div>
              <div className="small">AI label: swap • Risk ok</div>
            </div>
            <div>- € 94.12</div>
          </div>
          <div className="tx">
            <div>
              <div>NFT Mint (Zora)</div>
              <div className="small">AI label: nft • Higher gas</div>
            </div>
            <div>- € 12.55</div>
          </div>
        </div>
      </div>
    </div>
  )
}
