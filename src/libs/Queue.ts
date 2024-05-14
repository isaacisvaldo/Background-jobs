import  Queue  from "bull";
import redisClientConfig  from '../app/config/redisConfig';
import RegistrationMail from "../app/jobs/RegistrationMail";

const mailQueue = new Queue(RegistrationMail.key,{redis:redisClientConfig as any})
export default mailQueue;