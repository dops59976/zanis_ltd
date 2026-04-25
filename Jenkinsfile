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
                echo "📦 Checking out code..."
                checkout scm
            }
        }

        stage('Build Frontend Image') {
            steps {
                echo "🔨 Building frontend image..."
                dir('frontend') {
                    sh '''
                    docker build -t ${FRONTEND_IMAGE}:${IMAGE_TAG} .
                    echo "✅ Frontend image built: ${FRONTEND_IMAGE}:${IMAGE_TAG}"
                    '''
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                echo "🔨 Building backend image..."
                dir('backend') {
                    sh '''
                    docker build -t ${BACKEND_IMAGE}:${IMAGE_TAG} .
                    echo "✅ Backend image built: ${BACKEND_IMAGE}:${IMAGE_TAG}"
                    '''
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                echo "🔐 Logging in to Docker Hub..."
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
                echo "📤 Pushing frontend image to Docker Hub..."
                sh '''
                docker push ${FRONTEND_IMAGE}:${IMAGE_TAG}
                echo "✅ Frontend image pushed"
                '''
            }
        }

        stage('Push Backend Image') {
            steps {
                echo "📤 Pushing backend image to Docker Hub..."
                sh '''
                docker push ${BACKEND_IMAGE}:${IMAGE_TAG}
                echo "✅ Backend image pushed"
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo "🚀 Deploying to Kubernetes..."
                sh '''
                # Apply namespace and deployments
                echo "Applying K8s manifests..."
                kubectl apply -f k8s/01-namespace.yaml
                kubectl apply -f k8s/02-frontend-backend.yaml
                kubectl apply -f k8s/03-ingress.yaml
                
                echo "✅ K8s manifests applied"
                '''
            }
        }

    }

    post {
        always {
            echo "🧹 Cleaning up..."
            sh 'docker logout || true'
        }
        success {
            echo "✅ Pipeline executed successfully!"
            echo "🌐 Frontend: zanis.com"
            echo "🔌 API: api.zanis.com"
        }
        failure {
            echo "❌ Pipeline failed! Check logs above."
        }
    }
}
