import React from 'react'

export default function Wallet(){
  return (
    <div className="grid">
      <div className="card">
        <div className="h1">Accounts</div>
        <div className="grid grid-2">
          <div className="card">
            <div className="h2">EVM (ERC-4337)</div>
            <div className="small">0xA1c...B9a2</div>
            <div className="h2" style={{marginTop:8}}>€ 8,420.10</div>
          </div>
          <div className="card">
            <div className="h2">Solana</div>
            <div className="small">G7nq...9Vx</div>
            <div className="h2" style={{marginTop:8}}>€ 2,245.60</div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="h1">Approvals</div>
        <div className="list">
          <div className="tx">
            <div>
              <div>USDC → Uniswap Router</div>
              <div className="small">Allowance: Unlimited</div>
            </div>
            <button className="btn">Revoke</button>
          </div>
          <div className="tx">
            <div>
              <div>WETH → Blur</div>
              <div className="small">Allowance: 1.2 WETH</div>
            </div>
            <button className="btn">Revoke</button>
          </div>
        </div>
      </div>
    </div>
  )
}
