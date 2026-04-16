# NexaCloud — Self-Healing Enterprise DevOps Platform

A production-grade, fully automated, self-healing, auto-scaling multi-microservice platform deployed on AWS.

## Live URLs (Permanent Elastic IP)
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

## Architecture
- 6 Microservices (Django + JWT Auth)
- Docker + Docker Compose
- Kubernetes Helm Charts
- CI/CD GitHub Actions
- Prometheus + Grafana + Node Exporter
- Terraform IaC
- AWS EC2 with Elastic IP

## Tech Stack
- **Backend:** Python, Django, Django REST Framework
- **Auth:** JWT Tokens
- **Containerization:** Docker, Docker Compose
- **Orchestration:** Kubernetes, Helm
- **CI/CD:** GitHub Actions
- **Monitoring:** Prometheus, Grafana, Node Exporter
- **IaC:** Terraform
- **Cloud:** AWS EC2 (Elastic IP: 15.206.131.219)
