pipeline {
    agent { docker  {image 'beaconwarden/ecs1:latest'} }
    stages {
        stage('build') {
            steps {
                sh 'python --version'
                sh 'echo "helloe jenkins"'
            }

        }
        stage('Test') {
            steps {
                echo 'Testing'
            }
        }
        stage('Deploy') {
            steps {
               sh 'docker run -p 5000:5000 beaconwarden/ecs1'
            }
        }
        
    }
    post {
       always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
