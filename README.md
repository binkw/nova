# Nova Wallet (AI) — Starter (PWA + FastAPI)

Een werkende starter met de besproken layout en AI‑hooks als **mocked endpoints**.

## Snel starten

### Backend
```bash
cd backend
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend (PWA)
```bash
cd frontend
npm i
npm run dev
```
Open daarna http://localhost:5173 en zorg dat de backend op http://127.0.0.1:8000 draait.

## Wat zit erin?
- **Home**: portfolio header, AI Insights, laatste transacties
- **Wallet**: accounts + approvals (UI)
- **Swap**: NL‑intent → mocked plan/simulatie
- **Security**: risico‑feed (mocked)
- **Coach**: AI‑coach (mocked)

## Volgende stappen
- Koppelen met echte chain data (ethers.js/viem, Solana web3.js)
- Simulatie‑service (Tenderly/Anvil fork) + echte risk signals
- Account Abstraction (4337) + paymaster integratie
- Persistente user state (auth + DB)
