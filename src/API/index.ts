import React from "react";

const API_URL = "https://api.github.com";

export const getRepos = async (username: string) => {
    const response = await fetch(`${API_URL}/users/${username}/repos`);
    return response.json();
};
