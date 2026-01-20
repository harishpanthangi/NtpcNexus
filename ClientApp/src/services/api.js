import { MOCK_APPS } from '../constants';

const API_BASE_URL = `${import.meta.env.BASE_URL}api`;

export const fetchApplications = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/applications`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch applications:", error);
        return [];
    }
};

export const fetchRecentSubmissions = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/usersubmissions/recent`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch recent submissions:", error);
        return [];
    }
};

export const searchApplications = async (query) => {
    try {
        const response = await fetch(`${API_BASE_URL}/applications/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Could not search applications:", error);
        return [];
    }
}

export const submitUserFeedback = async (submissionData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/usersubmissions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.title || 'Failed to submit feedback');
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to submit feedback:", error);
        throw error;
    }
};
