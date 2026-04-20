pipeline {
    agent any
    
    tools {
        nodejs 'node18' 
    }

    stages {
        stage('Install & Test') {
            steps {
                sh 'npm install'
                sh 'node test.js'
            }
        }
        stage('Build Image') {
            steps {
                // Change 'zhyarnasr' to your actual Docker Hub username
                sh 'docker build -t zhyarnasr/my-app:latest .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh "echo ${PASS} | docker login -u ${USER} --password-stdin"
                    sh 'docker push zhyarnasr/my-app:latest'
                }
            }
        }
    }
}
