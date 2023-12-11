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
                bat "node -v"
                bat 'npm install'
            }
        }

        stage('Run Unit Test'){
            steps{
                bat 'npm run test'
            }
        }
    }


}