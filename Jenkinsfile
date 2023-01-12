pipeline {
   agent any
   stages {
      stage('Pruebas unitarias') {
         steps {
            echo "$GIT_BRANCH"
         }
      }

      stage('Pruebas de cobertura') {
         steps {
            echo "$GIT_BRANCH"
         }
      }

      stage('Generación de imagen y publicación') {
         environment {
            WEB_IMAGE_NAME="${ACR_LOGINSERVER}/siaraf/indep-siaraf_correos:1.${BUILD_NUMBER}"
         }
         steps {
            echo "Workspace is $WORKSPACE"
            echo "WebImage is $WEB_IMAGE_NAME"
            dir("$WORKSPACE")
            {
               script
               {
                  docker.withRegistry('https://acrindep.azurecr.io', 'acr-credentials')
                  {
                     def image = docker.build("$WEB_IMAGE_NAME")
                     image.push()
                  }
               }
            }
         }
      }


      stage('Implementación en QA') {
                    
         environment {
            ENVIRONMENT = 'qa'
            WEB_IMAGE_NAME="${ACR_LOGINSERVER}/siaraf/indep-siaraf_correos:1.${BUILD_NUMBER}"
         }
         steps {
            echo "Deploying to ${ENVIRONMENT}"
         
            

            sh(script: """
            # Update kubernetes deployment with new image.
            
            #kubectl set image deployment/correosms correosms=$WEB_IMAGE_NAME
            
            """)

         }
      }

   }
   
}
