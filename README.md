# NexaCloud — Self-Healing Enterprise DevOps Platform

A production-grade, fully automated, self-healing, auto-scaling multi-microservice platform deployed on AWS.

## 🌐 Live URLs (Permanent)
| Service | URL |
|---------|-----|
| Auth API | http://15.206.131.219:8000/api/auth/register/ |
| User API | http://15.206.131.219:8001/api/users/profiles/ |
| Product API | http://15.206.131.219:8002/api/products/ |
| Order API | http://15.206.131.219:8003/api/orders/ |
| Notification API | http://15.206.131.219:8004/api/notifications/ |
| Payment API | http://15.206.131.219:8005/api/payments/ |
| Prometheus | http://15.206.131.219:9090 |
| Grafana | http://15.206.131.219:3000 |

## 🏗️ Architecture
- 6 Microservices (Django + JWT Auth)
- Docker + Docker Compose
- Kubernetes Helm Charts
- CI/CD GitHub Actions
- Prometheus + Grafana + Node Exporter
- Terraform IaC
- AWS EC2 with Elastic IP

## 🚀 Services
| Service | Port | Description |
|---------|------|-------------|
| Auth | 8000 | JWT Authentication |
| User | 8001 | User Profiles |
| Product | 8002 | Product Catalog |
| Order | 8003 | Order Management |
| Notification | 8004 | Notifications |
| Payment | 8005 | Payment Processing |
| Prometheus | 9090 | Metrics Collection |
| Grafana | 3000 | Monitoring Dashboard |
| Node Exporter | 9100 | System Metrics |

## ⚡ Quick Start
```bash
git clone https://github.com/ajayreddy1202/nexacloud.git
cd nexacloud
docker-compose up -d
```

## 🛠️ Tech Stack
- **Backend:** Python, Django, Django REST Framework
- **Auth:** JWT Tokens
- **Containerization:** Docker, Docker Compose
- **Orchestration:** Kubernetes, Helm
- **CI/CD:** GitHub Actions
- **Monitoring:** Prometheus, Grafana, Node Exporter
- **IaC:** Terraform
- **Cloud:** AWS EC2 (Elastic IP: 15.206.131.219)
