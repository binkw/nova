import React, { useState } from 'react'
import { api } from '../api'

export default function Swap(){
  const [intent, setIntent] = useState('Swap 100 USDC to ETH on Arbitrum')
  const [result, setResult] = useState(null)
  async function plan(){
    const res = await api('/api/plan', { method:'POST', body: JSON.stringify({ intent }) })
    setResult(res)
  }
  return (
    <div className="grid">
      <div className="card">
        <div className="h1">Natural language swap</div>
        <input value={intent} onChange={e=>setIntent(e.target.value)} className="input" />
        <div className="small" style={{marginTop:8}}>Describe your action. Example: “Bridge 200 USDC from Polygon to Base and stake”.</div>
        <div className="row" style={{marginTop:12}}>
          <button className="btn acc" onClick={plan}>Plan & simulate</button>
        </div>
      </div>
      {result && (
        <div className="card">
          <div className="h1">Simulation</div>
          <div className="small">Route: {result.route}</div>
          <div className="small">Estimated out: {result.estimated_out}</div>
          <div className="small">Gas (est.): {result.gas_estimate}</div>
          <div className="small">Risk: {result.risk}</div>
        </div>
      )}
    </div>
  )
}
