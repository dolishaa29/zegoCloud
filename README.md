# ConnectNow

A browser-based video conferencing app built with React and [ZEGOCLOUD](https://www.zegocloud.com/). Users enter a room code to instantly join a video call — no account or download required.

## Tech Stack

| Layer | Library / Tool |
|---|---|
| UI | React 19 |
| Routing | React Router v7 |
| Video SDK | @zegocloud/zego-uikit-prebuilt |
| Bundler | Vite 8 |
| Linter | Oxlint |

## Getting Started

### Prerequisites

- Node.js 18+
- A ZEGOCLOUD account — get your **App ID** and **Server Secret** from the [ZEGOCLOUD Console](https://console.zegocloud.com/)

### Installation

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env` file inside `frontend/`:

```env
VITE_ZEGOCLOUD_APP_ID=your_app_id_here
VITE_ZEGOCLOUD_SERVER_SECRET=your_server_secret_here
```

> **Note:** `VITE_ZEGOCLOUD_APP_ID` must be a number. `VITE_ZEGOCLOUD_SERVER_SECRET` is a hex string.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
frontend/
├── public/
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   ├── index.jsx     # Home page — room code entry
│   │   ├── index.css     # Home page styles
│   │   └── room.jsx      # Room page — ZEGOCLOUD video UI
│   ├── App.jsx           # Route definitions
│   ├── App.css
│   ├── index.css         # Global styles
│   └── main.jsx          # React entry point
├── index.html
├── vite.config.js
└── package.json
```

## Routes

| Path | Page | Description |
|---|---|---|
| `/` | Home | Enter or generate a room code |
| `/room/:roomCode` | Room | Joins the ZEGOCLOUD video conference for that code |

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Production build (output: dist/)
npm run preview   # Preview the production build locally
npm run lint      # Run Oxlint
```

## How It Works

1. The user enters a room code (or clicks the shuffle button to generate one) on the home page.
2. They are navigated to `/room/:roomCode`.
3. The room page calls `ZegoUIKitPrebuilt.generateKitTokenForTest` with the App ID, Server Secret, and room code to obtain a session token.
4. `zp.joinRoom()` mounts the full video conference UI into a full-screen container.

> The `generateKitTokenForTest` helper is suitable for development only. For production, generate tokens server-side and never expose your Server Secret in the client.

## Security Note

`VITE_ZEGOCLOUD_SERVER_SECRET` is embedded in the client bundle during `npm run build`. This is acceptable for local testing but **not for production**. In production, implement a backend endpoint that generates tokens and remove the secret from the frontend environment.

## License

MIT
