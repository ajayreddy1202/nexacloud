# NexaCloud — Self-Healing Enterprise DevOps Platform

A production-grade, fully automated, self-healing, auto-scaling multi-microservice platform deployed on AWS.

## Architecture
- 6 Microservices (Django + JWT Auth)
- Docker + Docker Compose
- Kubernetes (Helm Charts)
- CI/CD (GitHub Actions)
- Monitoring (Prometheus + Grafana)
- Infrastructure as Code (Terraform)

## Services
| Service | Port | Description |
|---------|------|-------------|
| Auth | 8000 | JWT Authentication |
| User | 8001 | User Profiles |
| Product | 8002 | Product Catalog |
| Order | 8003 | Order Management |
| Notification | 8004 | Notifications |
| Payment | 8005 | Payment Processing |

## Monitoring
| Tool | Port | URL |
|------|------|-----|
| Prometheus | 9090 | /metrics |
| Grafana | 3000 | admin/admin123 |

## Quick Start
```bash
git clone https://github.com/ajayreddy1202/nexacloud.git
cd nexacloud
docker-compose up -d
```

## Tech Stack
- **Backend:** Python, Django, Django REST Framework
- **Auth:** JWT Tokens
- **Containerization:** Docker, Docker Compose
- **Orchestration:** Kubernetes, Helm
- **CI/CD:** GitHub Actions
- **Monitoring:** Prometheus, Grafana
- **IaC:** Terraform
- **Cloud:** AWS EC2
