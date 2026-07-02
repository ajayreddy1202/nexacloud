pipeline {
    agent any

    environment {
        PROJECT_DIR   = "/home/ubuntu/nexacloud"
        AWS_REGION    = "ap-south-1"
        AWS_ACCOUNT   = "067602653556"
        ECR_REGISTRY  = "${AWS_ACCOUNT}.dkr.ecr.${AWS_REGION}.amazonaws.com"
    }

    stages {

        stage('Checkout Source Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ajayreddy1202/nexacloud.git'
            }
        }

        stage('Show Workspace') {
            steps {
                sh '''
                echo "Current Workspace:"
                pwd
                ls -la
                '''
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner'

                    withSonarQubeEnv('SonarQube') {
                        sh """
                        ${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectBaseDir=$WORKSPACE
                        """
                    }
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                sh """
                cd ${PROJECT_DIR}
                docker compose build
                """
            }
        }

        stage('Login to Amazon ECR') {
            steps {
                sh """
                aws ecr get-login-password --region ${AWS_REGION} | \
                docker login \
                --username AWS \
                --password-stdin ${ECR_REGISTRY}
                """
            }
        }

        stage('Tag Docker Images') {
            steps {
                sh """
                docker tag nexacloud-auth-service:latest ${ECR_REGISTRY}/nexacloud-auth-service:latest
                docker tag nexacloud-user-service:latest ${ECR_REGISTRY}/nexacloud-user-service:latest
                docker tag nexacloud-product-service:latest ${ECR_REGISTRY}/nexacloud-product-service:latest
                docker tag nexacloud-order-service:latest ${ECR_REGISTRY}/nexacloud-order-service:latest
                docker tag nexacloud-notification-service:latest ${ECR_REGISTRY}/nexacloud-notification-service:latest
                docker tag nexacloud-payment-service:latest ${ECR_REGISTRY}/nexacloud-payment-service:latest
                docker tag nexacloud-frontend:latest ${ECR_REGISTRY}/nexacloud-frontend:latest
                """
            }
        }

        stage('Push Images to Amazon ECR') {
            steps {
                sh """
                docker push ${ECR_REGISTRY}/nexacloud-auth-service:latest
                docker push ${ECR_REGISTRY}/nexacloud-user-service:latest
                docker push ${ECR_REGISTRY}/nexacloud-product-service:latest
                docker push ${ECR_REGISTRY}/nexacloud-order-service:latest
                docker push ${ECR_REGISTRY}/nexacloud-notification-service:latest
                docker push ${ECR_REGISTRY}/nexacloud-payment-service:latest
                docker push ${ECR_REGISTRY}/nexacloud-frontend:latest
                """
            }
        }

        stage('Deploy Application') {
            steps {
                sh """
                cd ${PROJECT_DIR}
                docker compose up -d
                """
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                docker ps
                '''
            }
        }
    }

    post {

        success {
            echo "========================================="
            echo " NexaCloud CI/CD Pipeline Successful "
            echo "========================================="
        }

        failure {
            echo "========================================="
            echo " NexaCloud CI/CD Pipeline Failed "
            echo "========================================="
        }

        always {
            cleanWs()
        }
    }
}
