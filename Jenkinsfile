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
        
        stage('Build & Push') {
            steps {
                script {
                    // This uses the Docker Pipeline plugin logic
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-creds') {
                        def myImage = docker.build("zhyar1/my-app:latest")
                        myImage.push()
                    }
                }
            }
        }
    }
}
