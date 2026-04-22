pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = '89ba80b2-56ad-4be2-978b-f74a6e00019b'
        FRONTEND_IMAGE = 'dops59976/zanisltd-fe'
        BACKEND_IMAGE = 'dops59976/zanisltd-be'
        IMAGE_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out code..."
                checkout scm
            }
        }

        stage('Build Frontend Image') {
            steps {
                echo "Building frontend image..."
                dir('frontend') {
                    sh '''
                    docker build -t ${FRONTEND_IMAGE}:${IMAGE_TAG} .
                    '''
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                echo "Building backend image..."
                dir('backend') {
                    sh '''
                    docker build -t ${BACKEND_IMAGE}:${IMAGE_TAG} .
                    '''
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                echo "Logging in to Docker Hub..."
                withCredentials([usernamePassword(
                    credentialsId: "${DOCKERHUB_CREDENTIALS}",
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    '''
                }
            }
        }

        stage('Push Frontend Image') {
            steps {
                echo "Pushing frontend image to Docker Hub..."
                sh '''
                docker push ${FRONTEND_IMAGE}:${IMAGE_TAG}
                '''
            }
        }

        stage('Push Backend Image') {
            steps {
                echo "Pushing backend image to Docker Hub..."
                sh '''
                docker push ${BACKEND_IMAGE}:${IMAGE_TAG}
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo "Deploying to Kubernetes..."
                sh '''
                kubectl apply -f k8s/ingress.yaml -n apps
                kubectl rollout restart deployment/nginx -n apps
                kubectl rollout restart deployment/backend-api -n apps
                kubectl rollout status deployment/nginx -n apps
                kubectl rollout status deployment/backend-api -n apps
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                echo "Verifying deployment..."
                sh '''
                echo "=== Frontend Deployment ==="
                kubectl get deployment nginx -n apps
                echo "=== Backend Deployment ==="
                kubectl get deployment backend-api -n apps
                echo "=== Pods Status ==="
                kubectl get pods -n apps
                echo "=== Ingress Status ==="
                kubectl get ingress -n apps
                '''
            }
        }
    }

    post {
        always {
            echo "Logging out from Docker Hub..."
            sh 'docker logout || true'
        }
        success {
            echo "✅ Pipeline executed successfully!"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
}
