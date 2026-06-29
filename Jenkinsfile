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
                sh 'pwd'
                sh 'ls -la'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'docker ps'
            }
        }

    }

    post {

        success {
            echo '======================================='
            echo 'NexaCloud Deployment Successful'
            echo '======================================='
        }

        failure {
            echo '======================================='
            echo 'Deployment Failed'
            echo '======================================='
        }

    }

}
