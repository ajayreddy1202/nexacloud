pipeline {
    agent any

    environment {
        PROJECT_DIR = "/home/ubuntu/nexacloud"
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

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                    sonar-scanner
                    '''
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

        stage('Deploy Containers') {
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
            echo '===================================='
            echo 'NexaCloud Deployment Successful'
            echo '===================================='
        }

        failure {
            echo '===================================='
            echo 'NexaCloud Deployment Failed'
            echo '===================================='
        }
    }
}
