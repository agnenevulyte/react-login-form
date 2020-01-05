// https://serverless-stack.com/chapters/configure-aws-amplify.html
export default {
	s3: {
		REGION: 'eu-west-1',
		BUCKET: 'notes-app-2020-uploads'
	},
	apiGateway: {
		REGION: 'eu-west-1',
		URL: 'https://y12sq3p30k.execute-api.eu-west-1.amazonaws.com/prod'
	},
	cognito: {
		REGION: 'eu-west-1',
		USER_POOL_ID: 'eu-west-1_rtxoyILSU',
		APP_CLIENT_ID: '2bta28m2d80od7e37od39kjhfi',
		IDENTITY_POOL_ID: 'eu-west-1:5ead1410-cf12-478a-9895-1474f9386694'
	}
};
