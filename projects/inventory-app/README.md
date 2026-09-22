# inventory-app

Inventory remote for products, stock movements, warehouses, and reorder indicators.

## Federation

Exposes:

```text
./Routes -> projects/inventory-app/src/app/remote-entry.routes.ts
```

The shell mounts this remote at `/inventory`.

## Commands

```bash
npm run start:inventory
npm run build:inventory
```

Standalone URL: `http://localhost:4202`
