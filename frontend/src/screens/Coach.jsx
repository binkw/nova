import React, { useState } from 'react'
import { api } from '../api'

export default function Coach(){
  const [q, setQ] = useState('Waar kan ik 200 euro besparen zonder mijn risico te verhogen?')
  const [ans, setAns] = useState(null)
  async function ask(){
    const res = await api('/api/coach', { method:'POST', body: JSON.stringify({ question: q }) })
    setAns(res)
  }
  return (
    <div className="grid">
      <div className="card">
        <div className="h1">AI Coach</div>
        <textarea className="input" rows="3" value={q} onChange={e=>setQ(e.target.value)} />
        <div className="row" style={{marginTop:12}}>
          <button className="btn acc" onClick={ask}>Ask</button>
        </div>
      </div>
      {ans && (
        <div className="card">
          <div className="h1">Advice</div>
          <div className="list">
            {ans.tips.map((t,i)=>(<div className="tx" key={i}><div>{t}</div></div>))}
          </div>
        </div>
      )}
    </div>
  )
}
