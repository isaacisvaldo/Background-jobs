import Queue from './libs/Queue'
import RegistrationMail from './app/jobs/RegistrationMail'
Queue.process(RegistrationMail.handle)