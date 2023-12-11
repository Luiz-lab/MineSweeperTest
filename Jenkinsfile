pipeline{
    agent any
    tools{
        nodejs "node 21.1.0"
    }

    stages{
        stage('Checkout'){
            steps{
                checkout([$class: 'GitSCM', branches:[[name:'*/main']],userRemoteConfigs: [[url: 'https://github.com/Luiz-lab/MineSweeperTest.git']]])
            }
        }

        stage('Build'){
            steps{
                sh "node -v"
                sh 'npm install'
            }
        }

        stage('Run Unit Test'){
            steps{
                sh 'npm run test'
            }
        }
    }


}