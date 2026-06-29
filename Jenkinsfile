pipeline {

    agent any

    environment {
        PROJECT_NAME = "nexacloud"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ajayreddy1202/nexacloud.git'
            }
        }

        stage('Show Files') {
            steps {
                sh '''
                    pwd
                    ls -la
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                    cd /home/ubuntu/nexacloud
                    docker compose build
                '''
            }
        }

        stage('Deploy Containers') {
            steps {
                sh '''
                    cd /home/ubuntu/nexacloud

                    docker compose down || true

                    docker compose up -d --build
                '''
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
            echo '========================================'
            echo ' NexaCloud Deployment Successful '
            echo '========================================'
        }

        failure {
            echo '========================================'
            echo ' NexaCloud Deployment Failed '
            echo '========================================'
        }

        always {
            cleanWs()
        }

    }

}
