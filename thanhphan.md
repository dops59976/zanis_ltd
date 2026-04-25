| Thành phần | Vị trí                             | Mô tả                                                         |
| ---------- | ---------------------------------- | ------------------------------------------------------------- |
| Jenkins    | /Users/openclaw/project/jenkins/   | CI/CD server (Docker Compose), quản lý Docker & K8s trên host |
| zanis_ltd  | /Users/openclaw/project/zanis_ltd/ | Main project - Frontend + Backend                             |
| Images     | DockerHub                          | Build qua Jenkins → push DockerHub                            |
| Deployment | K8s (Docker Desktop)               | Pull images từ DockerHub → deploy                             |

| Thành phần     | Chi tiết                                   | Trạng thái       |
| -------------- | ------------------------------------------ | ---------------- |
| Repository     | https://github.com/dops59976/zanis_ltd.git | ✅ Push to Git    |
| Folder         | /Users/openclaw/project/zanis_ltd/         | ✅ Local ready    |
| Build Pipeline | Jenkins → Jenkinsfile                      | ✅ Setup          |
| Docker Images  | Build từ Jenkinsfile → DockerHub           | ✅ Pipeline ready |
| K8s Deployment | Pull images từ DockerHub → K8s manifest    | ✅ Namespace apps |

| Thành phần           | Vị trí                                            | Trạng thái              |
| -------------------- | ------------------------------------------------- | ----------------------- |
| Jenkins              | /Users/openclaw/project/jenkins/ (Docker Compose) | ✅ Chạy OK               |
| K8s (Docker Desktop) | In-memory cluster                                 | ✅ Setup & Ingress ready |
| Ingress (Nginx)      | Controller installed                              | ✅ Hoạt động             |
| Host zanis.com       | Localhost ingress                                 | ✅ Configured            |

postgres://zanis:zanis_postgres_password@postgres:5432/zanis_db