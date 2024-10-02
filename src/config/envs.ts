import 'dotenv/config';
import * as joi from 'joi';


interface EnVars{
    PORT: number;
    STRIPE_SECRET: string;
    SUCCESS_URL: string;
    CANCEL_URL: string;
    STRIPE_ENDPOINTSECRET: string;

}



const envsSchema = joi.object({
    PORT: joi.number().required(),
    STRIPE_SECRET: joi.string().required(),
    SUCCESS_URL: joi.string().required(),
    CANCEL_URL: joi.string().required(),
    STRIPE_ENDPOINTSECRET: joi.string().required()

})
.unknown(true);

const { error, value } = envsSchema.validate( process.env );

if( error ){
    throw new Error(`Config validation error: ${ error.message}`);
}

const envVars: EnVars = value;

export const envs = {
    port: envVars.PORT,
    stripeSecret: envVars.STRIPE_SECRET,
    successUrl: envVars.SUCCESS_URL,
    cancelUrl: envVars.CANCEL_URL,
    stripeEndpointSecret: envVars.STRIPE_ENDPOINTSECRET
}