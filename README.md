# 🚀 NexaCloud – Enterprise DevOps Microservices Project

<p align="center">

![GitHub last commit](https://img.shields.io/github/last-commit/ajayreddy1202/nexacloud)
![GitHub repo size](https://img.shields.io/github/repo-size/ajayreddy1202/nexacloud)
![GitHub stars](https://img.shields.io/github/stars/ajayreddy1202/nexacloud?style=social)
![AWS](https://img.shields.io/badge/AWS-EC2-orange)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-red)
![SonarQube](https://img.shields.io/badge/SonarQube-Code%20Quality-blue)
![Grafana](https://img.shields.io/badge/Grafana-Monitoring-orange)
![Prometheus](https://img.shields.io/badge/Prometheus-Metrics-yellow)

</p>

---

# 📖 Project Overview

**NexaCloud** is an Enterprise DevOps project that demonstrates how to build, analyze, deploy, and monitor a cloud-native microservices application.

The project is deployed on **AWS EC2** using **Docker Compose**, automated with **Jenkins CI/CD**, analyzed using **SonarQube**, and monitored using **Prometheus**, **Grafana**, and **Node Exporter**.

---

# ✨ Features

- 🚀 Enterprise Microservices Architecture
- 🐳 Docker & Docker Compose Deployment
- 🔄 Jenkins CI/CD Pipeline
- 🔍 SonarQube Code Quality Analysis
- 📊 Prometheus Monitoring
- 📈 Grafana Dashboards
- 🖥️ Node Exporter Monitoring
- 🌐 Nginx Reverse Proxy
- ☁️ AWS EC2 Deployment
- 🔁 Automatic Container Restart

---

# 🛠️ Technology Stack

| Category | Technologies |
|----------|--------------|
| Cloud | AWS EC2 |
| Backend | Python, Django, Django REST Framework |
| Frontend | HTML, CSS, JavaScript |
| Containerization | Docker, Docker Compose |
| CI/CD | Jenkins |
| Code Quality | SonarQube |
| Monitoring | Prometheus, Grafana, Node Exporter |
| Reverse Proxy | Nginx |
| Version Control | Git, GitHub |

---

# 🏗️ Architecture

```text
                 GitHub
                    │
                    ▼
             Jenkins CI/CD
                    │
                    ▼
              SonarQube Scan
                    │
                    ▼
              Docker Build
                    │
                    ▼
          Docker Compose Deploy
                    │
     ┌──────────────┴──────────────┐
     ▼                             ▼
 Nginx Reverse Proxy          Frontend
                    │
                    ▼
        Django Microservices
                    │
                    ▼
                 AWS EC2

Monitoring

Node Exporter
      │
      ▼
Prometheus
      │
      ▼
Grafana
```

---

# 🌐 Live Services

| Service | URL |
|---------|-----|
| 🌐 Frontend | http://13.205.151.224 |
| 🔧 Jenkins | http://13.205.151.224:8081 |
| 🔍 SonarQube | http://13.205.151.224:9000 |
| 📊 Prometheus | http://13.205.151.224:9090 |
| 📈 Grafana | http://13.205.151.224:3000 |

---

# 🔗 API Endpoints

| API | Endpoint |
|-----|----------|
| 🔐 Auth API | http://13.205.151.224:8000/api/auth/register/ |
| 👤 User API | http://13.205.151.224:8001/api/users/profiles/ |
| 📦 Product API | http://13.205.151.224:8002/api/products/ |
| 🛒 Order API | http://13.205.151.224:8003/api/orders/ |
| 🔔 Notification API | http://13.205.151.224:8004/api/notifications/ |
| 💳 Payment API | http://13.205.151.224:8005/api/payments/ |

---

# 📸 Project Screenshots

## 🏠 Frontend

> Add your screenshot:

```
images/frontend-home.png
```

---

## 🔄 Jenkins CI/CD Pipeline

> Add your screenshot:

```
images/jenkins-pipeline.png
```

---

## 🔍 SonarQube Dashboard

> Add your screenshot:

```
images/sonarqube-dashboard.png
```

---

## 📊 Prometheus Dashboard

> Add your screenshot:

```
images/prometheus-dashboard.png
```

---

## 📈 Grafana Dashboard

> Add your screenshot:

```
images/grafana-dashboard.png
```

---

# 🚀 CI/CD Workflow

```
Developer
     │
     ▼
GitHub Push
     │
     ▼
Jenkins Pipeline
     │
     ▼
SonarQube Analysis
     │
     ▼
Docker Build
     │
     ▼
Docker Compose Deployment
     │
     ▼
AWS EC2
     │
     ▼
Prometheus Monitoring
     │
     ▼
Grafana Dashboard
```

---

# 📂 Project Structure

```
NexaCloud
│
├── frontend
├── services
│   ├── auth-service
│   ├── user-service
│   ├── product-service
│   ├── order-service
│   ├── payment-service
│   └── notification-service
│
├── config
├── helm
├── terraform
├── docker-compose.yml
├── Jenkinsfile
├── nginx.conf
├── sonar-project.properties
└── README.md
```

---

# 🚀 How to Run

```bash
git clone https://github.com/ajayreddy1202/nexacloud.git

cd nexacloud

docker compose up -d
```

---

# 📊 Monitoring Stack

- ✅ Prometheus
- ✅ Grafana
- ✅ Node Exporter

---

# ☁️ AWS Deployment

- Amazon EC2
- Ubuntu Linux
- Docker
- Docker Compose

---

# 🎯 Skills Demonstrated

- DevOps
- AWS Cloud
- Docker
- Docker Compose
- Jenkins
- SonarQube
- Prometheus
- Grafana
- Node Exporter
- Nginx
- Git & GitHub
- Linux
- Python
- Django

---

# 🚀 Future Enhancements

- Kubernetes (Amazon EKS)
- Helm Charts
- Terraform Infrastructure
- GitHub Actions
- ArgoCD
- AWS ECR
- AWS Load Balancer
- Auto Scaling

---

# 👨‍💻 Author

## Ajay Kumar Bhumana

**DevOps Engineer | AWS | Docker | Jenkins | Kubernetes | Terraform | Python**

### GitHub

https://github.com/ajayreddy1202

---

Testing GitHub Webhook
⭐ **If you like this project, please consider giving it a Star!**
