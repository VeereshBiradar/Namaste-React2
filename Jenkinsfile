pipeline {
    agent any

    environment {
        // Define any environment variables you need
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the version control system
                git branch: 'main', url: 'https://your-repository-url.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the React application
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                // Build the Docker image
                sh 'docker build -t your-docker-repo/your-react-app:${BUILD_NUMBER} .'
            }
        }

        stage('Docker Push') {
            steps {
                // Push the Docker image to a Docker registry
                withDockerRegistry(credentialsId: 'docker-hub-credentials', url: 'https://index.docker.io/v1/') {
                    sh 'docker push your-docker-repo/your-react-app:${BUILD_NUMBER}'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the Docker container (this can vary based on your deployment strategy)
                sshagent(['your-server-credentials']) {
                    sh '''
                    ssh user@your-server 'docker pull your-docker-repo/your-react-app:${BUILD_NUMBER} && 
                    docker stop react-app || true && 
                    docker rm react-app || true && 
                    docker run -d -p 80:80 --name react-app your-docker-repo/your-react-app:${BUILD_NUMBER}'
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
