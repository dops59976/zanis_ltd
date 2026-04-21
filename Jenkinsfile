pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = "zanisltd"
        FRONTEND_IMAGE = "${DOCKER_HUB_REPO}/zanisltd-fe"
        BACKEND_IMAGE = "${DOCKER_HUB_REPO}/zanisltd-be"
        IMAGE_TAG = "latest"
        DOCKERHUB_CREDS = credentials('docker_hub')
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
                sh '''
                    echo $DOCKERHUB_CREDS_PSW | docker login -u $DOCKERHUB_CREDS_USR --password-stdin
                '''
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
                    kubectl set image deployment/nginx nginx=${FRONTEND_IMAGE}:${IMAGE_TAG} -n default
                    kubectl set image deployment/backend-api backend=${BACKEND_IMAGE}:${IMAGE_TAG} -n default
                    kubectl rollout status deployment/nginx -n default
                    kubectl rollout status deployment/backend-api -n default
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                echo "Verifying deployment..."
                sh '''
                    echo "=== Frontend Deployment ==="
                    kubectl get deployment nginx -n default
                    echo "=== Backend Deployment ==="
                    kubectl get deployment backend-api -n default
                    echo "=== Pods Status ==="
                    kubectl get pods -n default
                '''
            }
        }
    }

    post {
        always {
            echo "Logging out from Docker Hub..."
            sh '''
                docker logout
            '''
        }
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}
