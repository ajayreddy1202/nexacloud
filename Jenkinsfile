pipeline {
    agent any

    environment {
        PROJECT_DIR = "/home/ubuntu/nexacloud"
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
            echo "======================================="
            echo " NexaCloud Deployment Successful "
            echo "======================================="
        }

        failure {
            echo "======================================="
            echo " NexaCloud Deployment Failed "
            echo "======================================="
        }

        always {
            cleanWs()
        }
    }
}
