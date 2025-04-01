class RequestsClass {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    };

    async register(username: string, password: string) {
        const response = await fetch(`${this.baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        return response.json();
    };

    async login(username: string, password: string) {
        const response = await fetch(`${this.baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        return response.json();
    };

    async setFavorites(trackId: string, token: string | null) {
        if (!token) {
            return;
        }
        const response = await fetch(`${this.baseUrl}/favorites`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ trackId }),
        });
        return response.json();
    };

    async deleteFavorites(trackId: string, token: string | null) {
        if (!token) {
            return;
        }
        const response = await fetch(`${this.baseUrl}/favorites`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ trackId }),
        });
        return response.json();
    };

    async getFavorites(token: string | null) {
        if (!token) {
            return;
        }
        const response = await fetch(`${this.baseUrl}/favorites`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.json();
    };

    async getTracks(token: string | null) {
        if (!token) {
            return;
        }
        const response = await fetch(`${this.baseUrl}/tracks`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.json();
    };
}

export default new RequestsClass('http://localhost:8000/api');