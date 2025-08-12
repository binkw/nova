from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AI Crypto Wallet Backend", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PlanIn(BaseModel):
    intent: str

class CoachIn(BaseModel):
    question: str

@app.get('/api/insights')
def insights():
    return [
        {"title":"Gas laag op Arbitrum", "detail":"Gemiddeld 7 gwei; plan swaps nu voor lagere kosten.", "tag":"gas"},
        {"title":"Airdrop kans: ExampleX", "detail":"Je voldoet aan 4/6 criteria. Overweeg bridge + 1 dApp interactie.", "tag":"airdrop"},
        {"title":"Rug‑pull signalen gedetecteerd", "detail":"Token XYZ: liquiditeit niet gelockt, dev wallet concentratie 28%.", "tag":"risk"},
    ]

@app.post('/api/plan')
def plan(p: PlanIn):
    # Mock: simple deterministic response
    return {
        "route": "USDC -> ETH via Uniswap V3 (Arbitrum)",
        "estimated_out": "0.052 ETH",
        "gas_estimate": "€ 1.23",
        "risk": "low",
        "explanation": f"Parsed intent: {p.intent}",
    }

@app.get('/api/risk')
def risk_feed():
    return [
        {"title":"Unlimited allowance for USDC -> Uniswap", "detail":"Overweeg terug te zetten naar exact bedrag.", "level":"medium"},
        {"title":"Spam NFT hidden", "detail":"Airdrop van onbekend contract verstopt.", "level":"low"},
        {"title":"Old spender approval (OpenSea v1)", "detail":"Niet gebruikt > 180 dagen; revoke aangeraden.", "level":"medium"},
    ]

@app.post('/api/coach')
def coach(c: CoachIn):
    # Mock: simple template answers
    return {
        "tips": [
            "Verlaag slippage van 1% naar 0.3% bij grote swaps (scheelt ~€8/€1k).",            "Plan swaps wanneer gas < 10 gwei (notificatie aanzetten).",            "Rebalance: -10% alt exposure naar stables om volatiliteit te verlagen.",        ]
    }
