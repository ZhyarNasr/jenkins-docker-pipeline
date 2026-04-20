pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install & Test') {
            steps {
                // This simulates the "Test" activity mentioned in your requirements
                sh 'npm install'
                sh 'node test.js'
            }
        }
        stage('Build Image') {
            steps {
                sh 'docker build -t your-dockerhub-username/my-app:latest .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh "docker login -u ${USER} -p ${PASS}"
                    sh 'docker push your-dockerhub-username/my-app:latest'
                }
            }
        }
    }
}
