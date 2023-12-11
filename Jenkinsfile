pipeline {
    agent any
    
    tools { 
        nodejs "nodejs" // Corrigido para "nodejs"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/Luiz-lab/MineSweeperTest.git']]])
            }
        }
        
        stage('Build') {
            steps {
                sh "node -v"
                sh 'npm install'
            }
        }
        
        stage('Run Unit Tests') {
            steps {
                sh 'npm run test'
            }
        }
    }
    
    post {
        always {
            // Clean up steps, if needed
        }
    }
}
