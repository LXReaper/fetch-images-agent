export default {
	async fetch(request: Request): Promise<Response> {
		/**
		 * Replace `remote` with the host you wish to send requests to
		 */
		const remote = "http://www.aiagentprox.com";

		return await fetch(remote, request);
	},
};
