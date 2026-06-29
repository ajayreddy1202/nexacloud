pipeline {

    agent any

    tools {
        sonarQubeScanner 'SonarScanner'
    }

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

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                        cd /home/ubuntu/nexacloud

                        SonarScanner/bin/sonar-scanner \
                        -Dsonar.projectKey=nexacloud \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://15.206.131.219:9000 \
                        -Dsonar.login=$SONAR_AUTH_TOKEN
                    '''
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                timeout(time: 30, unit: 'MINUTES') {
                    sh '''
                        cd /home/ubuntu/nexacloud

                        docker compose build --no-cache
                    '''
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                timeout(time: 15, unit: 'MINUTES') {
                    sh '''
                        cd /home/ubuntu/nexacloud

                        docker compose down || true

                        docker compose up -d
                    '''
                }
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
            echo '========================================'
            echo 'NexaCloud Deployment Successful'
            echo '========================================'
        }

        failure {
            echo '========================================'
            echo 'NexaCloud Deployment Failed'
            echo '========================================'
        }

        always {
            cleanWs()
        }
    }
}
