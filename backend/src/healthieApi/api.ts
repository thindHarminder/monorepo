class HealthieAPI {
  private baseUrl: string;
  private token: string;

  constructor(token: string) {
    this.baseUrl = "https://api.gethealthie.com/graphql";
    this.token = token;
  }

  async query(queryString: string, variables: Record<string, any> = {}) {
    return this.request(queryString, variables);
  }

  async mutate(mutationString: string, variables: Record<string, any> = {}) {
    return this.request(mutationString, variables);
  }

  private async request(
    queryOrMutation: string,
    variables: Record<string, any> = {}
  ) {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({
        query: queryOrMutation,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as any;
    if (data.errors) {
      throw new Error(data.errors.map((e: any) => e.message).join(", "));
    }

    return data.data;
  }
}

export default HealthieAPI;
