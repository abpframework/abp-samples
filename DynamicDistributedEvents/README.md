# Dynamic Distributed Events Sample

This sample demonstrates ABP's dynamic (string-based) distributed event bus feature with multiple providers.

## Prerequisites

- .NET 10.0+
- Docker (for message brokers)
- SQL Server (local)

## Projects

| Project | Provider | Transport |
|---|---|---|
| `DynamicDistributedEvents.RabbitMq` | RabbitMQ | RabbitMQ via Docker |
| `DynamicDistributedEvents.Kafka` | Kafka | Kafka + Zookeeper via Docker |
| `DynamicDistributedEvents.Rebus` | Rebus | In-memory (no external dependency) |
| `DynamicDistributedEvents.Azure` | Azure Service Bus | Azure Service Bus Emulator via Docker |

## Quick Start

### RabbitMQ

```bash
docker compose up -d rabbitmq
dotnet run --project src/DynamicDistributedEvents.RabbitMq
```

### Kafka

```bash
docker compose up -d zookeeper kafka
sleep 15
dotnet run --project src/DynamicDistributedEvents.Kafka
```

### Rebus (In-Memory)

No Docker needed:

```bash
dotnet run --project src/DynamicDistributedEvents.Rebus
```

### Azure Service Bus (Emulator)

```bash
docker compose up -d servicebus-sql servicebus-emulator
sleep 30
dotnet run --project src/DynamicDistributedEvents.Azure
```

## Expected Output

```
All distributed event scenarios passed (default).
```

## Test Scenarios

Each project runs 3 scenarios:

1. **TypedFromTyped** — Publish typed event → typed handler receives it
2. **TypedFromDynamic** — Publish by string name → typed handler receives auto-converted data
3. **DynamicOnly** — Publish by string name → dynamic handler receives `DynamicEventData`

## Configuration

Update `appsettings.json` in each project to match your SQL Server connection string.
