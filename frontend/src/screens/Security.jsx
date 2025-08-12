import React, { useEffect, useState } from 'react'
import { api } from '../api'

export default function Security(){
  const [risks, setRisks] = useState([])
  useEffect(()=>{ api('/api/risk').then(setRisks).catch(()=>setRisks([])) },[])
  return (
    <div className="grid">
      <div className="card">
        <div className="h1">Security Center</div>
        <div className="list">
          {risks.map((r, i)=>(
            <div key={i} className="tx">
              <div>
                <div style={{fontWeight:600}}>{r.title}</div>
                <div className="small">{r.detail}</div>
              </div>
              <span className="label">{r.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
