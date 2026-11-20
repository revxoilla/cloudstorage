export default {
  async fetch(request, env) {
    const id = env.MYCLOUD_DO.idFromName("MYCLOUD");
    const stub = env.MYCLOUD_DO.get(id);

    return stub.fetch(request);
  }
};

export class MyCloudRelay {
  constructor(state, env) {
    this.state = state;
  }

  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/status") {
      return Response.json({
        app: "MYCLOUD",
        durable_object: "online",
        esp32: "not_connected"
      });
    }

    return new Response("MYCLOUD Durable Object ONLINE");
  }
}
